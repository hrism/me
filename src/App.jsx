import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';
import Figure from 'react-bootstrap/Figure';
import { Helmet } from "react-helmet";


export default function App() {
  return (
    <>
      <Helmet>
        <title>石丸治樹のホームページ（仮）</title>
      </Helmet>
      <Container className="py-4">
        <Row>
        </Row>
        <Row className="align-items-center justify-content-center">
          <Col xs="2" className="text-center">
            <image/>
            <Figure.Image
              width={120}
              height={120}
              className="rounded-circle"
              alt="石丸治樹"
              src="me/pYUM7q3Z_400x400.jpg"
            />
          </Col>
          <Col md="auto">
            <h1 className="fw-bold text-center mb-0">石丸治樹のホームページ（仮）</h1>
          </Col>
        </Row>
        <hr className="my-4" />
        <Alert variant="warning">
          現在、単発（期間一ヶ月程度）のお仕事のみお受けしています。
        </Alert>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>基本情報</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>いしまる-はるき</li>
                <li>1989年生まれ</li>
                <li>大阪府出身</li>
                <li>東京都 目黒区 在住</li>
                <li>同志社大学 法学部 政治学科 卒</li>
                <li>（株）ストックラボ 執行役員</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1.5">
            <Accordion.Header>SNS・ブログ</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li><a href="https://twitter.com/hrism2" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://www.facebook.com/haruki.ishimaru" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://www.threads.net/@hrk_o_k" target="_blank" rel="noopener noreferrer">Threads</a></li>
                <li><a href="https://www.linkedin.com/in/haruki-ishimaru-178687193/" target="_blank" rel="noopener noreferrer">Linked.in</a></li>
                <li><a href="https://qiita.com/hrism" target="_blank" rel="noopener noreferrer">Qiita</a></li>
                <li><a href="https://github.com/hrism" target="_blank" rel="noopener noreferrer">Github</a></li>
                <li><a href="https://hrism.hatenablog.com/" target='blank' rel='noopener noreferrer'>体験とデザイン、スタートアップについて（はてなブログ）</a></li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>できること</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>WEBデザイン</li>
                <li>UI／UXデザイン</li>
                <li>UXリサーチ</li>
                <li>UXオーディット</li>
                <li>静的コーディング（HTML／CSS）</li>
                <li>一部フロントエンド（React、Vue）</li>
                <li>Python自動処理</li>
                <li>動画編集</li>
                <li>印刷物デザイン</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>勉強中のこと</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>MySQL</li>
                <li>Python Django</li>
                <li>Next.js</li>
                <li>p5.js</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>使えるソフトウェア</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Figma</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Adobe XD</li>
                <li>Adobe AfterEffects</li>
                <li>Adobe Premiere</li>
                <li>Adobe Media Encoder</li>
                <li>Microsft Office 各種</li>
                <li>Visual Studio Code</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>主な制作物</Accordion.Header>
            <Accordion.Body>
              <p>※フリー時代のみ</p>
              <ul>
                <li>2023年07月15日 -【WEB】- <a href="https://hrism.github.io/futyou/" target="_blank" rel="noopener noreferrer">符丁変換くん</a></li>
                <li>2023年06月23日 -【動画】-  <a href="https://www.youtube.com/watch?v=X3yq98Og3iU" target="_blank" rel="noopener noreferrer">これから若者が未来を創造するために必要なグローバルスキルとは？（英語力ミライ会議Vol.2-3）</a></li>
                <li>2023年06月23日 -【動画】-  <a href="https://www.youtube.com/watch?v=PeaLzGCwtMs" target="_blank" rel="noopener noreferrer">伸びる英語教育 失敗しない教育設計とは？（英語力ミライ会議Vol.2-2）</a></li>
                <li>2023年06月23日 -【動画】-  <a href="https://www.youtube.com/watch?v=ULu-NWYqdVw" target="_blank" rel="noopener noreferrer">グローバル化と言われ30年 なぜ日本人は英語が話せないのか（英語力ミライ会議Vol.2-1）</a></li>
                <li>2023年05月09日 -【動画】-  <a href="https://www.tbs.co.jp/kamiwazachallenge_tbs" target="_blank" rel="noopener noreferrer">TBS系 THE神業チャレンジ 再現できたら100万円 CG編集</a></li>
                <li>2022年10月01日 -【WEB】-  <a href="https://hrism.github.io/random-business-category-selector/" target="_blank" rel="noopener noreferrer">random-business-category-selector</a></li>
                <li>2022年09月28日 -【動画】-  <a href="https://www.youtube.com/watch?v=JIxxwBRpomo" target="_blank" rel="noopener noreferrer">これから若者が未来を創造するために必要なグローバルスキルとは？（英語力ミライ会議 Vol.1-3）</a></li>
                <li>2022年09月28日 -【動画】-  <a href="https://www.youtube.com/watch?v=ltcmAGqfFT0" target="_blank" rel="noopener noreferrer">テクノロジーの発展で英語でのコミュニケーションはどう変わったか？（英語力ミライ会議 Vol.1-2）</a></li>
                <li>2022年09月28日 -【動画】-  <a href="https://www.youtube.com/watch?v=2sdTxfIr7vc" target="_blank" rel="noopener noreferrer">アジアで最下位 日本人の英語力の現在地と未来（英語力ミライ会議 Vol.1-1）</a></li>
                <li>2021年09月10日 -【WEB】-  <a href="https://bizreau.com/" target="_blank" rel="noopener noreferrer">ビズリオ ｜理想のキャリアへ導くSNS</a></li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}