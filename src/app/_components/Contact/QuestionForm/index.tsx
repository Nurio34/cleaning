import { sendQuestion } from "@/app/actions/sendQuestion";
import { QuestionsFormSchema } from "@/app/libs/zod";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import toast from "react-hot-toast";
import { PrismaQuestion } from "../../../../../prisma/types";
import { sendQuestionMail } from "@/app/utils/emailjs/sendQuestionMail";
import Link from "next/link";

function QuestionForm({
  setNewQuestion,
}: {
  setNewQuestion: Dispatch<SetStateAction<PrismaQuestion>>;
}) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [isKvkkChecked, setIsKvkkChecked] = useState(false);

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    question?: string;
    kvkk?: string;
  }>({});
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = QuestionsFormSchema.safeParse({
      name,
      email,
      question,
      kvkk: isKvkkChecked,
    });

    if (!result.success) {
      const fieldErrors: {
        name?: string;
        email?: string;
        question?: string;
        kvkk?: string;
      } = {};
      result.error.errors.forEach((err) => {
        if (err.path[0] === "name") fieldErrors.name = err.message;
        if (err.path[0] === "email") fieldErrors.email = err.message;
        if (err.path[0] === "question") fieldErrors.question = err.message;
        if (err.path[0] === "kvkk") fieldErrors.kvkk = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      const { status, errors, data } = await sendQuestion(
        name,
        email,
        question,
        isKvkkChecked
      );

      if (status === "fail" && errors) return setErrors(errors);
      if (status === "error") throw new Error("Unexpected server error!");
      if (status === "success" && data) {
        setName("");
        setEmail("");
        setQuestion("");
        setIsKvkkChecked(false);

        setNewQuestion(data);
        toast.success(
          "Sorunuzu başarıyla gönderdiniz. Sorunuzun cevabını en kısa sürede, sorunuzun alt kısmında yayınlayacağız."
        );

        const { name, email, question } = data;
        sendQuestionMail(name, email, question);
      }
    } catch (error) {
      console.log(error);
      toast.error(
        "Sorunuzu gönderirken beklenmedik bir hata oluştu. Lütfen tekrar deneyiniz."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-4 lg:w-4/6 lg:flex gap-x-8 space-y-4 lg:space-y-0 items-center justify-center">
      <form
        onSubmit={submitForm}
        className="grid gap-y-1 lg:min-w-96 space-y-2"
      >
        <input
          type="text"
          name="username"
          id="username"
          className="input w-full"
          placeholder="İsim (Opsiyonel)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Mail. Cevap verildiğinde bildirim alın (Opsiyonel)"
            className="input w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-xs font-semibold text-error w-full max-w-96 px-2 lg:px-0">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <textarea
            name="question"
            id="question"
            className="textarea w-full resize-none"
            placeholder="Lütfen sorunuzu bizimle paylaşın."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          {errors.question && (
            <p className="text-xs font-semibold text-error w-full max-w-96 px-2 lg:px-0">
              {errors.question}
            </p>
          )}
        </div>
        <div className="px-2 lg:px-0">
          <label htmlFor="kvkk-1" className="px-2 lg:px-0">
            <input
              type="checkbox"
              name="kvkk-1"
              id="kvkk-1"
              checked={isKvkkChecked}
              onChange={(e) => setIsKvkkChecked(e.target.checked)}
            />
            <small className="align-top">
              <Link
                href="/kvkk"
                target="_blank"
                className="text-primary underline underline-offset-2 pl-2 contrast-200 font-semibold"
              >
                Kişisel Verilerin Korunması Aydınlatma Metni’ni
              </Link>{" "}
              okudum ve kişisel verilerimin belirtilen kapsamda işlenmesine açık
              rıza veriyorum.
            </small>
          </label>
          {errors.kvkk && (
            <p className="text-xs font-semibold text-error w-full max-w-96 px-2 lg:px-0 ">
              {errors.kvkk}
            </p>
          )}
        </div>
        <button
          type="submit"
          className={`btn  ${
            isLoading ? "pointer-events-none bg-primary/50" : "btn-primary"
          }`}
        >
          {isLoading ? (
            <div className="flex items-center gap-x-1">
              <p>Gönderiyor</p>
              <span className="loading loading-spinner loading-sm"></span>
            </div>
          ) : (
            "Gönder"
          )}
        </button>
      </form>
      <div className="px-2 lg:px-0">
        <h2 className="text-2xl font-bold py-4">
          Görüşleriniz Bizim İçin Değerli!
        </h2>
        <p className="indent-4 py-1">
          <strong>
            Hizmet kalitemizi sürekli olarak geliştirmek için, sizin
            görüşleriniz bizim için son derece önemlidir.
          </strong>
          Geri bildiriminiz, sunduğumuz hizmetin kalitesini artırmamıza yardımcı
          olacak ve müşteri memnuniyetini en üst düzeye çıkarmamıza olanak
          sağlayacaktır.
        </p>
        <p className="indent-4 py-1">
          İster <strong>soru</strong>, ister <strong>öneri</strong> veya{" "}
          <strong>geri bildirim</strong> olsun, her türlü görüşünüz bizim için
          kıymetlidir.
        </p>
        <p className="indent-4 py-1">
          Bizimle paylaştığınız her düşünce, yalnızca hizmetlerimizi
          iyileştirmekle kalmaz, aynı zamanda sizin ve diğer kullanıcılarımızın
          deneyimini daha verimli ve memnun edici hale getirmemize yardımcı
          olur.
        </p>
        <p className="indent-4 py-1">
          Lütfen formu doldurarak görüşlerinizi bizimle paylaşın. Her bir geri
          bildiriminizi dikkatle inceleyecek ve en kısa sürede geri dönüş
          yapacağız.
        </p>
        <p className="indent-4 py-1">
          Her türlü <em>soru</em>, <em>öneri</em> veya <em>talep</em> için bize
          ulaşabilirsiniz. Şeffaf bir şekilde tüm geri bildirimlerinize yanıt
          vermek için buradayız!
        </p>
      </div>
    </div>
  );
}
export default QuestionForm;
