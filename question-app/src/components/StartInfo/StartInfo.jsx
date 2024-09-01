import "./startInfo.css";

// StartButton // Info
function StartInfo({ text, isVisible, handleClick }) {
  return (
    <div className="welcome">
      
      <ul className="info-list">
        <li className="info-list-item">
          Çalışma 10 sorudan oluşmaktadır.
        </li>
        <li className="info-list-item">
        Her soru ekranda en fazla 30sn kalacaktır.
        </li>
        <li className="info-list-item">
          İlk 4sn cevap şıkları görünmeyecektir.
        </li>
        <li className="info-list-item">
        Cevap şıklarından biri tıklandıktan ya da 30sn tamamlandıktan sonra yeni soruya geçiş yapılabilir.
        </li>
        <li className="info-list-item">Geçmiş sorulara dönülemeyecektir.</li>
        <li className="info-list-item">Test bitiminde her soruya verilen yanıt ile doğru ve yanlış sayıları kullanıcı ile paylaşılacaktır.</li>
      </ul>
      <h1 className="info-text">{text}</h1>
      {isVisible && (
        <button className="start-button" id="start" onClick={handleClick}>
          {" "}
          Teste Başla{" "}
        </button>
      )}
    </div>
  );
}

export default StartInfo;