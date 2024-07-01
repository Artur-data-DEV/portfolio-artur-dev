import Image from "next/image";
import Signature from "@/app/_components/animated/animated-signature";
import fork from "@/app/icons/fork.json";
import puzzle from "@/app/icons/puzzle.json";
import restApi from "@/app/icons/rest-api.json";
import cmd from "@/app/icons/cmd.json";
import webConference from "@/app/icons/web-conference.json";
import itdev from "@/app/icons/itdev.json";
import BiographyItem from "@/app/_components/biographyItem";
import { calcularIdade } from "../utils/functions/calcularIdade";

const Biography = () => {
  return (
    <div className="flex flex-col justify-center gap-5">
      <div className="flex gap-5">
        <Image
          src={"/profile.png"}
          alt="profile"
          fetchPriority="high"
          width={112}
          height={112}
          className="h-28 w-28 rounded-full object-cover"
        />
        <h1 className="self-center text-2xl font-bold">BIOGRAFIA</h1>
      </div>
      <div className="flex flex-col gap-5 px-1 text-lg text-current">
        <BiographyItem
          icon={fork}
          delay={5000}
          text={`Natural de Brasília, tenho ${calcularIdade("1999-09-29")} anos e minha paixão pela tecnologia e pelo desenvolvimento de software me instigaram a me tornar um mestre na arte da programação!`}
          reverse={true}
        />
        <BiographyItem
          icon={puzzle}
          delay={3500}
          text="Desde cedo, eu já demonstrava interesse genuíno em explorar o mundo da programação, alimentado pela curiosidade e determinação de aprender coisas novas e a inovar a partir delas."
        />
        <BiographyItem
          icon={restApi}
          delay={5000}
          text="Com uma formação sólida desenvolvimento de sistemas, me especializei no desenvolvimento de aplicativos web utilizando as tecnologias React e Node."
          reverse={true}
        />
        <BiographyItem
          icon={cmd}
          delay={5000}
          text="Creio que minha expertise em ambas as áreas me tornaram um profissional altamente qualificado, capaz de criar interfaces de usuário dinâmicas e eficientes, além de implementar servidores robustos e escaláveis."
        />
        <BiographyItem
          icon={webConference}
          delay={5000}
          text="Em minha jornada profissional, trabalhei em uma variedade de projetos desafiadores, onde pude aplicar meu conhecimento para criar soluções inovadoras e eficazes pra diversas empresas. Focado nos resultados e na capacidade de resolver problemas rapidamente, logo me tornei um atrativo para equipes de desenvolvimento ágeis."
          reverse={true}
        />
        <BiographyItem
          icon={itdev}
          delay={3500}
          text="Além de ser minha profissão, sou entusiasta da comunidade de tecnologia, participando ativamente de eventos, meetups e contribuindo para projetos de código aberto, sou conhecido por compartilhar conhecimento e colaborar com outros profissionais de TI. Estou sempre em busca de novos desafios e oportunidades de crescimento, enquanto continuo a aprimorar e expandir meu conhecimento em tecnologias emergentes."
        />
      </div>
      <span className="-mt-2 mb-5 px-5 text-sm italic">
        - Desenvolvendo soluções que transcendem o código, moldando o futuro
        através da inovação.
      </span>
      <div className="-mt-12 mr-24 h-24 w-40 self-end">
        <div className="h-full w-full">
          <Signature />
        </div>
      </div>
    </div>
  );
};

export default Biography;
