import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';

export function Dashboard() {
  return (
    <main className='p-4'>
      <div>
        <Link to={'/tickets'}>
          <Button>Ingressos</Button>
        </Link>
      </div>
    </main>
  );
}
