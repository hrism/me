import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';
import Figure from 'react-bootstrap/Figure';
import { Helmet } from "react-helmet";
import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';
import { FaSquareXTwitter } from "react-icons/fa6";
import Stack from 'react-bootstrap/Stack';
import { FaFacebookSquare } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { SiQiita } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";
import { RiArticleFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdWork } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { HiComputerDesktop } from "react-icons/hi2";
import { IoBusinessSharp } from "react-icons/io5";



export default function App() {
  return (
    <>
      <Helmet>
        <title>石丸治樹 Haruki Ishimaru</title>
      </Helmet>
      <Container className="py-4 mt-md-4">
        <Row className="align-items-center justify-content-center">
          <Col className="text-center">
            <Figure.Image
              width={240}
              height={240}
              className="rounded-circle mt-3"
              alt="石丸治樹"
              src={`${process.env.PUBLIC_URL}/pYUM7q3Z_400x400.jpg`}
            />
            <h1 className="fw-bold text-center mb-0 mt-3">石丸治樹 <br />
              <span className="fs-5">Haruki Ishimaru</span>
            </h1>
          </Col>
        </Row>
        <Row className="pt-5 pb-4 text-center justify-content-center px-2">
          デザイン・動画・WEBエンジニアリングの<br className="d-md-none"/>多様なスキルセット、<br/>
          そしてコミュニケーションと<br className="d-md-none"/>マネジメントのソフトスキルで、<br/>
          クライアントの理想を実現します。
        </Row>
        <Row className="pb-2">
          <Stack direction="horizontal" gap={2} className="justify-content-center mt-2">
            <a href="https://twitter.com/hrism2" target="_blank" rel="noopener noreferrer" className="fs-3 text-body-secondary text-center">
              <FaSquareXTwitter />
            </a>
            <a href="https://www.facebook.com/haruki.ishimaru" target="_blank" rel="noopener noreferrer" className="fs-3 text-body-secondary text-center">
              <FaFacebookSquare />
            </a>
            <a href="https://www.threads.net/@hrk_o_k" target="_blank" rel="noopener noreferrer" className="fs-3 text-body-secondary text-center">
              <BsFillThreadsFill />
            </a>
            <a href="https://www.linkedin.com/in/haruki-ishimaru-178687193/" target="_blank" rel="noopener noreferrer" className="fs-3 text-body-secondary text-center">
              <FaLinkedin />
            </a>
            <a href="https://github.com/hrism" target="_blank" rel="noopener noreferrer" className="fs-3 text-body-secondary text-center">
              <FaSquareGithub />
            </a>
            <a href="https://hrism.hatenablog.com/" target="_blank" rel="noopener noreferrer" className="fs-3 text-body-secondary text-center">
              <RiArticleFill />
            </a>
            <a href="https://qiita.com/hrism" target="_blank" rel="noopener noreferrer" className="d-flex fs-3 mt-2 px-1 rounded-1 text-bg-secondary text-center text-white">
              <SiQiita />
            </a>
          </Stack>
        </Row>
        {/* <hr className="my-4" /> */}
        <Accordion flush className="mt-5">
          <Accordion.Item eventKey="0" className="border-top">
            <Accordion.Header><CgProfile className="me-2"/>基本情報</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>いしまる-はるき</li>
                <li>1989年生まれ</li>
                <li>大阪府出身</li>
                <li>東京都 渋谷区 在住</li>
                <li>同志社大学 法学部 政治学科 卒</li>
                <li>（株）ストックラボ 最高執行責任者（COO）</li>
                <li>Google ユーザー エクスペリエンス調査 テスター</li>
                <li>Twitter Beta テスター</li>
                <li>Human Rights Watch 寄付会員</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header><MdWork className="me-2"/>主な制作物</Accordion.Header>
            <Accordion.Body>
              <Table striped bordered hover responsive className="mt-3 small">
                <tbody>
                  <tr>
                    <td className="text-center">
                      2024年05月01日
                    </td>
                    <td className="text-center">
                      <Badge bg="warning" text="dark">WEB</Badge>
                    </td>
                    <td>
                      <a href="https://www.stock-lab.com/osake-lp/" target="_blank" rel="noopener noreferrer">ストックラボお酒買取 リスティングランディング用ページ</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      2024年01月15日
                    </td>
                    <td className="text-center">
                      <Badge bg="warning" text="dark">WEB</Badge>
                    </td>
                    <td>
                      <a href="https://www.figma.com/design/fgB2MMWAcRyznd6GS217hC/Japanese-Whiskey-%E3%82%A4%E3%83%B3%E3%83%90%E3%82%A6%E3%83%B3%E3%83%89LP?node-id=0-1&t=W8CESJhaFBItgCfe-0" target="_blank" rel="noopener noreferrer">Japanese Whiskey インバウンドLP</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      2023年08月01日
                    </td>
                    <td className="text-center">
                      <Badge bg="warning" text="dark">WEB</Badge>
                    </td>
                    <td>
                      <a href="https://hrism.github.io/Primary-response-message-generator/" target="_blank" rel="noopener noreferrer">一次請けメッセージつくる君</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      2023年06月23日
                    </td>
                    <td className="text-center">
                      <Badge bg="success">動画</Badge>
                    </td>
                    <td>
                      <a href="https://www.youtube.com/watch?v=X3yq98Og3iU" target="_blank" rel="noopener noreferrer">これから若者が未来を創造するために必要なグローバルスキルとは？（英語力ミライ会議Vol.2-3）</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      2023年06月23日
                    </td>
                    <td className="text-center">
                      <Badge bg="success">動画</Badge>
                    </td>
                    <td>
                      <a href="https://www.youtube.com/watch?v=PeaLzGCwtMs" target="_blank" rel="noopener noreferrer">伸びる英語教育 失敗しない教育設計とは？（英語力ミライ会議Vol.2-2）</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      2023年06月23日
                    </td>
                    <td className="text-center">
                      <Badge bg="success">動画</Badge>
                    </td>
                    <td>
                      <a href="https://www.youtube.com/watch?v=ULu-NWYqdVw" target="_blank" rel="noopener noreferrer">グローバル化と言われ30年 なぜ日本人は英語が話せないのか（英語力ミライ会議Vol.2-1）</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      2023年05月09日
                    </td>
                    <td className="text-center">
                      <Badge bg="success">動画</Badge>
                    </td>
                    <td>
                      <a href="https://www.tbs.co.jp/kamiwazachallenge_tbs" target="_blank" rel="noopener noreferrer">TBS系 THE神業チャレンジ 再現できたら100万円 CG編集</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      2022年10月01日
                    </td>
                    <td className="text-center">
                      <Badge bg="warning" text="dark">WEB</Badge>
                    </td>
                    <td>
                      <a href="https://hrism.github.io/random-business-category-selector/" target="_blank" rel="noopener noreferrer">random-business-category-selector</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      2022年09月28日
                    </td>
                    <td className="text-center">
                      <Badge bg="success">動画</Badge>
                    </td>
                    <td>
                      <a href="https://www.youtube.com/watch?v=JIxxwBRpomo" target="_blank" rel="noopener noreferrer">これから若者が未来を創造するために必要なグローバルスキルとは？（英語力ミライ会議 Vol.1-3）</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      2022年09月28日
                    </td>
                    <td className="text-center">
                      <Badge bg="success">動画</Badge>
                    </td>
                    <td>
                      <a href="https://www.youtube.com/watch?v=ltcmAGqfFT0" target="_blank" rel="noopener noreferrer">テクノロジーの発展で英語でのコミュニケーションはどう変わったか？（英語力ミライ会議 Vol.1-2）</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      2022年09月28日
                    </td>
                    <td className="text-center">
                      <Badge bg="success">動画</Badge>
                    </td>
                    <td>
                      <a href="https://www.youtube.com/watch?v=2sdTxfIr7vc" target="_blank" rel="noopener noreferrer">アジアで最下位 日本人の英語力の現在地と未来（英語力ミライ会議 Vol.1-1）</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      2021年09月10日
                    </td>
                    <td className="text-center">
                      <Badge bg="warning" text="dark">WEB</Badge>
                    </td>
                    <td>
                      <a href="https://bizreau.com/" target="_blank" rel="noopener noreferrer">ビズリオ ｜理想のキャリアへ導くSNS</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      2021年09月10日
                    </td>
                    <td className="text-center">
                      <Badge bg="warning" text="dark">WEB</Badge><Badge bg="success">動画</Badge>
                    </td>
                    <td>
                      <a href="https://www.bandai-tcgconnect.com/" target="_blank" rel="noopener noreferrer">BANDAI TCG CONNECT</a>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header><FaLaptopCode className="me-2"/>できること</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>WEBデザイン</li>
                <li>UI／UXデザイン</li>
                <li>UXリサーチ</li>
                <li>UXオーディット</li>
                <li>静的コーディング（HTML／CSS）</li>
                <li>一部フロントエンド（React、Vue）</li>
                <li>CMS構築・デザイン（Wordpress、Shopify）</li>
                <li>Python自動処理</li>
                <li>動画編集</li>
                <li>印刷物デザイン</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header><HiComputerDesktop className="me-2"/>使えるソフトウェア</Accordion.Header>
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
          <Accordion.Item eventKey="5">
            <Accordion.Header><IoBusinessSharp className="me-2"/>職務経歴</Accordion.Header>
            <Accordion.Body>
              <ol>
                <li>株式会社IMAGICA：映像編集</li>
                <li>勝田印刷株式会社：印刷デザイナー</li>
                <li>株式会社スプレッドワン：UI/UXデザイナー・フロントエンドエンジニア</li>
                <li>株式会社ストックラボ：最高執行責任者COO（現職）</li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </Container>
    </>
  );
}