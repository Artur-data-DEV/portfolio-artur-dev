"use client";
import React from "react";
import { useForm } from "react-hook-form";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  contactMethod: "email" | "whatsapp";
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    // Aqui você pode enviar os dados do formulário para o seu backend ou serviço de e-mail
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-lg p-4">
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Nome
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
          className={`mt-1 block w-full rounded-md border p-2 ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.name && (
          <span className="text-sm text-red-500">Este campo é obrigatório</span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          E-mail
        </label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true })}
          className={`mt-1 block w-full rounded-md border p-2 ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.email && (
          <span className="text-sm text-red-500">Este campo é obrigatório</span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Mensagem
        </label>
        <textarea
          id="message"
          {...register("message", { required: true })}
          className={`mt-1 block w-full rounded-md border p-2 ${
            errors.message ? "border-red-500" : "border-gray-300"
          }`}
        ></textarea>
        {errors.message && (
          <span className="text-sm text-red-500">Este campo é obrigatório</span>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Método de contato
        </label>
        <div className="mt-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="email"
              {...register("contactMethod", { required: true })}
              className="form-radio text-blue-600"
            />
            <span className="ml-2">E-mail</span>
          </label>
          <label className="ml-4 inline-flex items-center">
            <input
              type="radio"
              value="whatsapp"
              {...register("contactMethod", { required: true })}
              className="form-radio text-blue-600"
            />
            <span className="ml-2">WhatsApp</span>
          </label>
        </div>
        {errors.contactMethod && (
          <span className="text-sm text-red-500">Este campo é obrigatório</span>
        )}
      </div>

      <button
        type="submit"
        className="rounded-md bg-blue-600 px-4 py-2 text-white"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
