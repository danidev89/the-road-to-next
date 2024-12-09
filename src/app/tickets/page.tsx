import Link from 'next/link';
import { initialTickets } from '@/data';

const TicketPage = () => {
  return (
    <div>
      {initialTickets.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>

          <Link
            href={`/tickets/${item.id}`}
            className="underline text-sm"
          >
            view
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TicketPage;
