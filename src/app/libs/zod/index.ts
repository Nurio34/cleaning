import { z } from "zod";

export const QuestionsFormSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  question: z
    .string()
    .min(
      10,
      "Lütfen sorunuzda daha fazla detay verin. En az 10 karakter olmalıdır."
    )
    .max(1000, "Soru çok uzun. Lütfen 1000 karakteri aşmayın."),
});

export type QuestionsFormType = z.infer<typeof QuestionsFormSchema>;

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(3, "İsim en az 3 karakter olmalı!")
    .nonempty("İsim alanı boş bırakılamaz, lütfen adınızı girin!"),
  email: z
    .string()
    .email("Lütfen geçerli bir e-posta adresi giriniz!")
    .min(1, "E-posta alanı boş bırakılamaz!"),
  message: z
    .string()
    .min(10, "Mesajınız en az 10 karakter olmalı!")
    .max(1000, "Mesajınız 1000 karakteri aşamaz.")
    .nonempty("Mesaj alanı boş bırakılamaz!"),
});

export type ContactFormType = z.infer<typeof ContactFormSchema>;
