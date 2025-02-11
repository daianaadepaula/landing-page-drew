import InputField from "../components/InputField"
import SubmitButton from "../components/SubmitButton"

const Contact = () => {
	return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Entre em contato
        </h2>
        <p className="mb-8 lg:mb-16 text-center text-sm font-light text-gray-500 dark:text-gray-400 sm:text-xl">
          Tem uma dúvida técnica? Quer enviar feedback sobre nossos serviços?
          Precisa de mais detalhes sobre nossos planos? Estamos aqui para ajudar.
          Fale com a gente!
        </p>

        <form action="#" className="space-y-8">
          <InputField
            id="email"
            label="Seu e-mail"
            type="email"
            placeholder="exemplo@gmail.com"
            required
          />
          <InputField
            id="subject"
            label="Assunto"
            type="text"
            placeholder="Deixe-nos saber como podemos ajudar você"
            required
          />
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Sua mensagem
            </label>
            <textarea
              id="message"
              rows={6}
              placeholder="Deixe sua mensagem"
              className="block w-full p-2.5 text-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />
          </div>
          <SubmitButton label="Enviar" />
        </form>
      </div>
    </section>
  )
}

export default Contact