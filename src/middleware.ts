import { clerkMiddleware } from "@clerk/nextjs/server";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
import { NextRequest, NextResponse } from "next/server";

//! *** Rate Limit Configs ***
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const limiter = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(150, "900s"),
  analytics: true,
});
//! ******************************

export default clerkMiddleware(async (auth, req: NextRequest) => {
  //! *** Rate Limit for All ***
  const userAgent = req.headers.get("user-agent") ?? "unknown";
  const ip = req.headers.get("x-forwarded-for") ?? "unknown_ip";
  const key = `ua_ip:${userAgent}:${ip}`;

  const { success, reset, remaining } = await limiter.limit(key);

  if (!success) {
    return new NextResponse(
      JSON.stringify({ error: "Too many requests", reset }),
      {
        status: 429,
        headers: {
          "Content-Type": "application/json",
          "X-RateLimit-Remaining": String(remaining),
          "X-RateLimit-Reset": String(reset),
        },
      }
    );
  }

  return NextResponse.next();
  //! ******************************
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
