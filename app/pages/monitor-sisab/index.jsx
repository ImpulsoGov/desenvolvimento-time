import 'bootstrap/dist/css/bootstrap.min.css';
import BarraNavegacao from '../../componentes/BarraNavegacao';

export default function Home() {
  return (
    <div class="row" style={{ width: '100%' }}>
        <BarraNavegacao></BarraNavegacao>
      <div>
      <iframe style={{width: '100%', height: '90vh', border:'2px solid #ccc'}} src="https://impulso-gov.betteruptime.com/"></iframe>
      </div>
    </div>
  )
}