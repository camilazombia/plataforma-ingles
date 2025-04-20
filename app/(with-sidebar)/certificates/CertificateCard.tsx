'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

interface CertificateCardProps {
  title: string;
  subtitle: string;
  status: 'locked' | 'completed';
  image: string;
  lockedImage: string;
  titleLocked: string;
  titleUnlocked: string;
  descriptionLocked: string;
  descriptionUnlocked: string;
  shareUrl: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({
  title,
  subtitle,
  status,
  image,
  lockedImage,
  titleLocked,
  titleUnlocked,
  descriptionLocked,
  descriptionUnlocked,
  shareUrl,
}) => {
  const { theme } = useTheme();
  const isCompleted = status === 'completed';

  const iconStatus = `/assets/${theme === 'dark' ? 'dark' : 'light'}/${isCompleted ? 'unlocked.svg' : 'lock.svg'}`;

  const socialLinks = [
    {
      name: 'WhatsApp',
      url: `https://api.whatsapp.com/send?text=Mira mi certificado: ${shareUrl}`,
      icon: `/assets/${theme === 'dark' ? 'dark' : 'light'}/whatsapp.svg`,
    },
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      icon: `/assets/${theme === 'dark' ? 'dark' : 'light'}/facebook.svg`,
    },
    {
      name: 'LinkedIn',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      icon: `/assets/${theme === 'dark' ? 'dark' : 'light'}/linkedin.svg`,
    },
  ];

  return (
    <div
      className={`relative p-6 rounded-xl flex flex-col justify-between text-left min-h-[80vh] bg-[var(--background-2)] ${
        isCompleted ? 'opacity-100' : 'opacity-50'
      } mb-4`}
    >
      {/* Icono de estado */}
      <div className="absolute top-6 right-6">
        <Image src={iconStatus} alt="Estado del certificado" width={30} height={30} />
      </div>

      {/* Contenido principal */}
      <div className="flex flex-col gap-6 flex-grow">
        {/* Título y subtítulo */}
        <div>
          <h2 className="text-xl font-bold text-[var(--color-primary-900)] py-3">{title}</h2>
          <p className="text-sm text-[var(--color-neutral-600)]">{subtitle}</p>
        </div>

        {/* Imagen y descripción */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-center">
            <Image
              src={isCompleted ? image : lockedImage}
              alt={`Certificado ${title}`}
              width={280}
              height={200}
              className="rounded-md object-contain"
            />
          </div>

          <div>
            <p className="text-lg font-bold text-[var(--color-primary-900)]">
              {isCompleted ? titleUnlocked : titleLocked}
            </p>
            <p className="text-sm text-[var(--color-primary-700)] mt-2">
              {isCompleted ? descriptionUnlocked : descriptionLocked}
            </p>
          </div>
        </div>
      </div>

      {/* Sección de acciones */}
      {isCompleted && (
        <div className="mt-6">
          <button className="w-full mb-4 px-6 py-2 border border-[var(--primary-color)] text-[var(--primary-color)] text-sm font-bold rounded-lg hover:bg-[var(--primary-color)] hover:text-white transition">
            Descargar Certificado
          </button>

          <div>
            <p className="text-sm font-bold text-[var(--color-neutral-600)] mb-2 text-center">Compártelo</p>
            <div className="flex gap-4 justify-center">
              {socialLinks.map(({ name, url, icon }) => (
                <a key={name} href={url} target="_blank" rel="noopener noreferrer" title={`Compartir en ${name}`}>
                  <Image src={icon} alt={name} width={30} height={30} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateCard;
