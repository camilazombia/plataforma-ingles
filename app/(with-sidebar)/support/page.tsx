'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

type AccordionItemProps = {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
  icon: string;
  theme: string;
  mounted: boolean;
};

const AccordionItem = ({
  title,
  content,
  isOpen,
  onClick,
  icon,
  theme,
  mounted,
}: AccordionItemProps) => {
  const iconColor = isOpen ? 'var(--color-primary-900)' : 'var(--color-neutral-600)';
  const textColor = isOpen ? 'var(--color-primary-900)' : 'var(--color-neutral-600)';

  return (
    <div className="border-b border-[var(--color-neutral-600)] pb-4 mb-4">
      <div className="flex items-start justify-between gap-4 cursor-pointer" onClick={onClick}>
        <div className="flex items-start gap-3">
          {mounted && (
            <div className="p-1 rounded">
              <Image
                src={`/assets/${theme}/${icon}`}
                alt="Ícono pregunta"
                width={20}
                height={20}
                style={{ filter: isOpen ? 'none' : 'grayscale(100%) brightness(0.7)' }}
              />
            </div>
          )}
          <span className="p16 font-bold" style={{ color: textColor }}>
            {title}
          </span>
        </div>

        {mounted && (
          <Image
            src={`/assets/${theme}/${isOpen ? 'chevron-up.svg' : 'chevron-down.svg'}`}
            alt="Toggle"
            width={32}
            height={32}
          />
        )}
      </div>

      {isOpen && (
        <div className="mt-2 p16 text-left text-[var(--color-neutral-600)]">
          {content}
        </div>
      )}
    </div>
  );
};

export default function SupportPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const faqs = [
    {
      title: '¿Cómo puedo acceder a los cursos?',
      content:
        'Para acceder a los cursos, inicia sesión con tu cuenta y dirígete al panel de usuario. Allí encontrarás todos los cursos disponibles según tu plan.',
      icon: 'question-access.svg',
    },
    {
      title: '¿Puedo descargar el material de estudio?',
      content:
        'Sí, la mayoría del material está disponible para descarga en formato PDF o como enlaces a recursos externos. Busca el ícono de descarga en cada módulo.',
      icon: 'question-download.svg',
    },
    {
      title: '¿Cómo obtengo mi certificado?',
      content:
        'Una vez completes todos los módulos y apruebes el examen final, podrás descargar tu certificado desde la sección de “Certificaciones” en el menú lateral.',
      icon: 'question-certificado.svg',
    },
    {
      title: '¿Puedo acceder desde mi celular?',
      content:
        '¡Claro que sí! Nuestra plataforma está optimizada para dispositivos móviles. Puedes acceder desde tu navegador sin problemas.',
      icon: 'question-mobile.svg',
    },
    {
      title: '¿Qué hacer si olvidé mi contraseña?',
      content:
        'Ve a la página de inicio de sesión y haz clic en “¿Olvidaste tu contraseña?”. Recibirás un correo para restablecerla en pocos minutos.',
      icon: 'question-password.svg',
    },
    {
      title: '¿Dónde contacto al soporte técnico?',
      content:
        'Puedes contactarnos directamente por Whatsapp desde esta misma sección, o enviar un correo a soporte@tuplataforma.com. Estamos para ayudarte.',
      icon: 'question-soporte.svg',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="bg-[var(--background-1)] min-h-screen p-10">
      <h1 className="h32 mb-4 text-left">Soporte y Ayuda</h1>

      <p className="p16 text-[var(--color-neutral-600)] mb-2 text-left">
        Lorem ipsum dolor sit amet consectetur. Habitasse dui eget leo scelerisque
        tristique risus nulla est sagittis.
      </p>

      <p className="p16 text-[var(--color-neutral-600)] mb-8 text-left">
        <span className="p14 font-bold">¿Necesitas ayuda?</span>{' '}
        <a href="#" className="text-[var(--primary-color)] underline">
          Contáctanos por Whatsapp
        </a>
      </p>

      <section>
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            title={faq.title}
            content={faq.content}
            icon={faq.icon}
            isOpen={openIndex === index}
            onClick={() => toggleAccordion(index)}
            theme={theme === 'dark' ? 'dark' : 'light'}
            mounted={mounted}
          />
        ))}
      </section>
    </main>
  );
}
