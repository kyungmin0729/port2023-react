import React from "react";

import { footerText } from "../constants";

const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">
                <h2 className="footer__text">
                    <div>kyungmin0729</div>
                    <div>portfolio2023</div>
                </h2>
                <div className="footer__info">
                    <div className="left">
                            <div className="title">
                                <a href="https://github.com/kyungmin0729">GitHub</a>
                            </div>
                        <p className="desc">GITHUB를 클릭하시면 작업물을 한번에 보실 수 있습니다.</p>
                    </div>
                    <div className="right">
                        <h3>More details<br />
                        README.md에 자세한 내용을 담았습니다.
                        </h3>
                        <ul>
                            {footerText.map((footer, key) => (
                                <li key={key}>
                                    <a href={footer.link}>{footer.title}</a>
                                    <em>{footer.desc}</em>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="footer__right">
                    &copy; portFolio2023<br />
                    이 사이트는 리액트를 이용하여 제작하였습니다.
                </div>
            </div>
        </footer>
    )
}

export default Footer;