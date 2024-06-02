// Formulário.jsx

import React from "react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          type="text"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span data-testid="name-error">Este campo é obrigatório</span>
        )}
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span data-testid="email-error">Este campo é obrigatório</span>
        )}
      </div>
      <div>
        <label htmlFor="message">Mensagem</label>
        <textarea id="message" {...register("message", { required: true })} />
        {errors.message && (
          <span data-testid="message-error">Este campo é obrigatório</span>
        )}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
