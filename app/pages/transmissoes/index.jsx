import 'bootstrap/dist/css/bootstrap.min.css';
import BarraNavegacao from '../../componentes/BarraNavegacao';

export default function Home() {
  return (
    <div class="row" style={{ width: '100%', paddingRight: 0, marginRight: 0, marginLeft: 0}}>
        <BarraNavegacao></BarraNavegacao>
      <div style={{ width: '100%', paddingRight: 0, marginRight: 0, marginLeft: 0}}>
      <iframe style={{width: '100%', height: '400vh', border:'2px solid #ccc'}} src="https://datastudio.google.com/embed/reporting/b38bdb6e-28c8-4118-ad41-7d27b18ab651/page/1Rt6C"></iframe>
      </div>
    </div>
  )
}
