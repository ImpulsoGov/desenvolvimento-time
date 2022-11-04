import 'bootstrap/dist/css/bootstrap.min.css';
import BarraNavegacao from '../../componentes/BarraNavegacao';

export default function Home() {
  return (
    <div class="row" style={{ width: '100%', paddingRight: 0, marginRight: 0, marginLeft: 0}}>
        <BarraNavegacao></BarraNavegacao>
      <div>
      <iframe style={{width: '100%', height: '90vh', border:'2px solid #ccc'}} src="https://docs.google.com/spreadsheets/d/16F-NH3HrP7EEKn6LlmIxQ0Fa57GF_2-mlBn8xwNl_uY/edit?usp=sharing"></iframe>
      </div>
    </div>
  )
}
