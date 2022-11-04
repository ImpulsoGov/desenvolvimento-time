import 'bootstrap/dist/css/bootstrap.min.css';
import BarraNavegacao from '../componentes/BarraNavegacao';

export default function Home() {
  return (
    <div class="row" style={{ width: '100%' }}>
        <BarraNavegacao></BarraNavegacao>
      <div>
      <iframe style={{width: '100%', height: '500px', border:'2px solid #ccc'}} src="https://v1.embednotion.com/embed/caecc5ddec4a482cb5ef37d60ddde30e"></iframe>
      </div>
    </div>
  )
}
