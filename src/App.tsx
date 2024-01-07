
const arr = [...Array(100)].map((_, i) => (i + 1));
const now = new Date(); //今の日時
const getYear = now.getFullYear()
const target  = new Date(`${getYear + 1}/1/1 0:00:00`);
const target2 = new Date(`${getYear}/1/1 0:00:00`);
const remain_time = target.getTime() - now.getTime(); //差分を取る（ミリ秒で返ってくる）
const all_time = target.getTime() - target2.getTime();
const percentage = (1 - (remain_time / all_time)) * 100;
console.log(percentage);
const n = 1 ;	// 小数点第n位まで残す

const float = Math.floor( percentage * Math.pow( 10, n ) ) / Math.pow( 10, n ) ;
export function Base() {
  return (
    <>
    <p>{getYear}年の{float}％が終わりましたが、まだ大丈夫ですよね。</p>
    </>
  )
}
function App() {
  return (
    <>
      {arr.map((number) => (
      <>
      {number < percentage && number % 10 !== 0 && <span key={number} style={{backgroundColor: "rgb(216, 216, 216)",
      height: "18px",
      width: "18px",
      margin: "4px",
      border: "3px solid black",
      borderRadius: "2px",
      display: "inline-block"
      }}></span>}
      {number < percentage && number % 10 === 0 && <><span key={number} style={{backgroundColor: "rgb(216, 216, 216)",
      height: "18px",
      width: "18px",
      margin: "4px",
      borderRadius: "2px",
      border: "3px solid black",
      display: "inline-block"}}></span><br/></>}
       {number >= percentage && number % 10 !== 0 &&<span key={number} style={{backgroundColor: "rgb(40, 40, 56)",
      height: "18px",
      width: "18px",
      margin: "4px",
      borderRadius: "2px",
      border: "3px solid white",
      display: "inline-block"}}></span>}
      {number >= percentage && number % 10 === 0 && <><span key={number} style={{backgroundColor: "rgb(40, 40, 56)",
      height: "18px",
      width: "18px",
      margin: "4px",
      borderRadius: "2px",
      border: "3px solid white",
      display: "inline-block"}}></span><br/></>}
      
      </>
    ))}
    <p>＊ このサイトの制作者「かっちゃん」のHP・お問い合わせは <a className="btn4"href="https://random776.github.io/kacchan_home/">こちら</a> から。</p>
    <p>＊ 本サイトは以前作成した <a className="btn4"href="https://nauru-percentage.onrender.com">こちら</a> のサイトの改良版です。</p>
    </>
  )
}

export default App;