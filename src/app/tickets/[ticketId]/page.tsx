import { initialTickets } from '@/data';

type TicketPageProps = {
  params: {
    ticketId: string;
  };
};

const TicketPage = ({ params }: TicketPageProps) => {
  const ticket = initialTickets.find(
    (ticket) => ticket.id === params.ticketId
  );

  if (!ticket) {
    return <div>Ticket not found</div>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-2">TicketPage</h1>
      <h2 className="text-3xl font-semibold">{ticket.title}</h2>
      <p>{ticket.content}</p>
    </div>
  );
};

export default TicketPage;
