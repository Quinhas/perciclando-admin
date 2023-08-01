import { useQuery } from '@tanstack/react-query';
import { getFontEmbedCSS, toPng } from 'html-to-image';
import { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { ticketsService } from '../../../../app/services/ticketsService';

export function useTicketDetailsController() {
  const { ticketId } = useParams();
  const [hideButtons, setHideButtons] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  const {
    data: ticket,
    isError,
    isFetching,
  } = useQuery({
    queryKey: ['tickets', ticketId],
    queryFn: async () => ticketsService.getById({ id: ticketId! }),
    enabled: !!ticketId,
  });

  async function handleShareTicket() {
    if (!cardRef.current || !ticket) {
      toast.error('Ingresso inválido. Tente novamente.');
      return;
    }

    setHideButtons(true);

    const fontEmbedCss = await getFontEmbedCSS(cardRef.current);

    const dataUrl = await toPng(cardRef.current, {
      cacheBust: false,
      quality: 0.95,
      backgroundColor: 'transparent',
      canvasWidth: 396 * 2.5,
      canvasHeight: 565 * 2.5,
      fontEmbedCSS: fontEmbedCss,
    });
    const link = document.createElement('a');
    link.download = `Perciclando-${String(ticket.number).padStart(3, '0')}.png`;
    link.href = dataUrl;
    link.click();

    setHideButtons(false);
  }
  return {
    ticket,
    isError,
    isFetching,
    handleShareTicket,
    hideButtons,
    cardRef,
  };
}
