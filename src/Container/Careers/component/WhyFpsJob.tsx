import { AppConst } from "@/Enum/AppConst";


const WhyFpsJob = () => {
  return (
    <div className="full-width-container why-phonepe-wrapper">
      <div className="content">
        <div className="why-phonepe-widget">
          <h2 style={{ opacity: 1, top: 0 }}>Why {AppConst.LogoName}?</h2>
          <div className="why-info-wrapper">
            <div className="why-bird-container" style={{ opacity: 1, top: 0 }}>
              <div
                className=" gatsby-image-wrapper"
                style={{ position: "relative", overflow: "hidden" }}
              >
                <div
                  aria-hidden="true"
                  style={{ width: "100%", paddingBottom: "70%" }}
                />
                <picture>
                  <source
                    media="(max-width: 600px)"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEMElEQVQ4y2WTe0xbdRTHT+k0TJZolOGwwrINGIvI2MAMI1FxjigsY1La8ugtvZcOAYECMmBhmrERYLotsinZVnkIRGAzMB7BAIKbDFtLoY9bSnm40gulvGkAYXBLf6Zd/MPsm5x/P/mcnO+BaITAkEDClFALJtGok5Kn2C3nKtx0GOmpx7SeA7zBfUO8AReK0DEpgQo6Q7dhJa8STEECMLI+Zdrk4+FITR1BCDHoXxXggE0LNWBO1L+ojVfvW0yePI4uWEJ38hbObIjNZ1HuyseWL6ZO6PikxzQx4nyHgcCetSYp0xyW7kf/puxFamPvkqjYyxTIZzrMzIn6F0YwredGhvmUChtOLwp88Evy/hpFTkDjYNGJltbHXFXOpnj29FiCzsdEjDhrC9IYwx+kwEJQ/HG6U2HYapMtLHAuiJZTvnEF87lxBhmnen1TbD7ZckZahB+qWhC/34huZfSiGE8J4ntVIOJw9Vpd2MPrdqgOU++3G2p5hXvNl2uvbkrajKu5N9vn4r7izaeWvgIKjtx5OcXoPxSvTT93pGaR5yFB2MFKerDbaK0vkVsjX/6Bjj/4DNrPU+Wspk+9d/OY4qX6yJKARalBPXajA8lPXUxEZaV7BvnXd4GMI3dFeZaQb0Pa73M97qKC8Ga6pVyFumt1tq1N2vZ7gx5lhTTSPE8JKn639QHKWfpkKF7BQl1N8Dn4QndpX2Z1TMONJrYExKJhAD1GvrGePhNxPuDeAP9QBUrwrrIadUu2jh9JW1eNzqZ+NGXDfautdsvsow1Ka/b82WG+9sD8+WbmTnkTPGVnB88QpcXXou4z27BqgFGB1n01zRSRc7RxMMG3Cp12uWWVtT+xSfL6bLWFUtTyvcr22avlVoFPFcp6u15lzbIDyYOG6DqnhegCWBSVhlqIyzFmvASm8VIGSDny11C+JaQ4uLWF712BYlkSuiylBxm0izbL/IatqWwIcd3v0Jh3JSp8p7nDsXKs0t1EaBiLwmuAcAKMwqu71ohLYB+QsmXO62nTfo+5yi9xn+p1zKvScZTEt37aeXRvdKdDQtLsvbcRfrh6uztqoOCfdFOwgjuwZ4LTCzN4J8zjF2EJvwJLRBEsEVcAZpMmGOpYpRudNRdaG/bwO6F31Ya9KlzWXZR0rBalBv+M+Acqdm6Hdkm2MmcjdBjpQREjzEnhMBiIFVgm/oM9G6DsL+coNulBZ8591MNW5H8d1NQj9q8fS/Wtm8j1a/yjPVJ26al4NnxCOOJF4TpnI6YCo1AHpjgSKGIU/heDQAuTAo0DqrEXPMPkj3KXPzQlGdimZAMH5S+f3BabA4f5mjeNuM5Zw+4DMrofKNE4/J1JwXOhOAp4IiAdprOiCac/2bLdf3EVrhShZ00njrIGY4bc+qNkLhQ+wjRgKtBwpECJxoAi9GAk9M8B/wW8IFeydDD9eAAAAABJRU5ErkJggg=="
                  />
                  <source srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAABYlAAAWJQFJUiTwAAAEN0lEQVQ4y2WTe0xTdxTHD48ZFJMtGz6QgRsDxsIcIC443cwwYJzieHrLo7e0FxoEhILycOoWFFQkcU4nbtjwJgMWwktkBiTAdNCV0ge9tFCQ2geURwuMt95yf1vJsmTxm5x/v+fzzfcc0GetgZo1CDo2CRPxI9YShmibEBPtVOKkyzCLdBExxLvFjH57LaGw0bCk0HoIwXxWCeh9mTC+9ZANLRw9gWRaL4SQNfV4AEAdJwddnAwM8cNbyFiZoylJ44e+WThqzpkNWUkzhKHsucC/UnT+CqbcWU8o7L4CBO8AwFJDn40h6KwX1SHuRDJNtynxpseEb4zNJpnFTImTe1fTDEESfCgt36+p/szeSlGmT91Avn9zyzNMmrnGmwpWxSk8JgilHZmTbDV05AzM7I/2pR6Lxl8+FBhnsYvcuaRCB5jijlrJY6S71niGwMZTvdfYrmUm3pE6dC+9C0W58BHTrQRxPixfrjrW/b3FVIHL3gMAIBlXdhjyqgpX+Q81i9l3W6djvo2aSS54C0SY0G4+Wes9EEOmcj+qNDGc+Qh3LaXETzTmmhtCc8ibRVSs66bp0h8MaeZiqu5w0YGBbTVf3/Ax9qmlqtu/IeGxywnoh4LtYuYtWxCc7ndAOfNfFB5urcecH6BLJ5uo5vtS9KRaQb9co+iu2mGU8XkdxXDho+uftTShTNNxcazICbU3QBr4QkfBM155VO3tpohi4CaqAUZwcs/i2YngLJ86EfODEhTnXmbWKE30I76c7qhU0LJuHc3xLDdbKM9510rM52ZCFUzSdTqr0YYuqof1iAz/SaLgegVWZduGlwGoWOSehRT9qfPedeI4zzIUbP/jxp+PxunirN/pqqsC1HxPSoe9fd/M8ihDGftqpOaMmdAhnHQdj6y2no28DMaEgi/niavRk+wboOcUWIHgtHAz8jX/5hamewmKduJTd5I6kZo00guzq3TDHTHCHIsp3L0UXfm0sc0SWRItcdQTMqtZ9i3Y4CSBhn3TdonIhWUiF6AvQmC3kqrf9xSTnOd4lC/jbqWbpcR7VWz0/KraaOPLqYgdP1tKedUR3n9xJXXioAjr3z6GdcEEpx2mOZfAyMkDI5EPRiIPYIo7ZiWLluyiMqYDKoK67rLdy9Ysp4I5PUCJ+6tRysFfUOz7JRs/BbTz19OnTipwuYuWo7R5ETcEasIEJiIPTET+f/Pvyw2/ocTlLlT69NHOcNGF7w40dPI+qVEle1aPZX9c97Q1RJC7zps6McpWumk5CrsXuBQ0HAVocBloiWH4n8ZZclDjUovplsEY6e61tElvlD0XoOeOR+oT1Ri6MBf4imfwUzDl72rYQ3ay8B6QhPWALmEUdNxReE3PQzvgOWsQtGwSJhNGrXsjBFuFmMhBS4w46eNVTgNR4p29EQJ7S0zLYllkL2jjVZtkr9H9o78Ba69XON8XwLoAAAAASUVORK5CYII=" />
                  <img
                    aria-hidden="true"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAABYlAAAWJQFJUiTwAAAEN0lEQVQ4y2WTe0xTdxTHD48ZFJMtGz6QgRsDxsIcIC443cwwYJzieHrLo7e0FxoEhILycOoWFFQkcU4nbtjwJgMWwktkBiTAdNCV0ge9tFCQ2geURwuMt95yf1vJsmTxm5x/v+fzzfcc0GetgZo1CDo2CRPxI9YShmibEBPtVOKkyzCLdBExxLvFjH57LaGw0bCk0HoIwXxWCeh9mTC+9ZANLRw9gWRaL4SQNfV4AEAdJwddnAwM8cNbyFiZoylJ44e+WThqzpkNWUkzhKHsucC/UnT+CqbcWU8o7L4CBO8AwFJDn40h6KwX1SHuRDJNtynxpseEb4zNJpnFTImTe1fTDEESfCgt36+p/szeSlGmT91Avn9zyzNMmrnGmwpWxSk8JgilHZmTbDV05AzM7I/2pR6Lxl8+FBhnsYvcuaRCB5jijlrJY6S71niGwMZTvdfYrmUm3pE6dC+9C0W58BHTrQRxPixfrjrW/b3FVIHL3gMAIBlXdhjyqgpX+Q81i9l3W6djvo2aSS54C0SY0G4+Wes9EEOmcj+qNDGc+Qh3LaXETzTmmhtCc8ibRVSs66bp0h8MaeZiqu5w0YGBbTVf3/Ax9qmlqtu/IeGxywnoh4LtYuYtWxCc7ndAOfNfFB5urcecH6BLJ5uo5vtS9KRaQb9co+iu2mGU8XkdxXDho+uftTShTNNxcazICbU3QBr4QkfBM155VO3tpohi4CaqAUZwcs/i2YngLJ86EfODEhTnXmbWKE30I76c7qhU0LJuHc3xLDdbKM9510rM52ZCFUzSdTqr0YYuqof1iAz/SaLgegVWZduGlwGoWOSehRT9qfPedeI4zzIUbP/jxp+PxunirN/pqqsC1HxPSoe9fd/M8ihDGftqpOaMmdAhnHQdj6y2no28DMaEgi/niavRk+wboOcUWIHgtHAz8jX/5hamewmKduJTd5I6kZo00guzq3TDHTHCHIsp3L0UXfm0sc0SWRItcdQTMqtZ9i3Y4CSBhn3TdonIhWUiF6AvQmC3kqrf9xSTnOd4lC/jbqWbpcR7VWz0/KraaOPLqYgdP1tKedUR3n9xJXXioAjr3z6GdcEEpx2mOZfAyMkDI5EPRiIPYIo7ZiWLluyiMqYDKoK67rLdy9Ysp4I5PUCJ+6tRysFfUOz7JRs/BbTz19OnTipwuYuWo7R5ETcEasIEJiIPTET+f/Pvyw2/ocTlLlT69NHOcNGF7w40dPI+qVEle1aPZX9c97Q1RJC7zps6McpWumk5CrsXuBQ0HAVocBloiWH4n8ZZclDjUovplsEY6e61tElvlD0XoOeOR+oT1Ri6MBf4imfwUzDl72rYQ3ay8B6QhPWALmEUdNxReE3PQzvgOWsQtGwSJhNGrXsjBFuFmMhBS4w46eNVTgNR4p29EQJ7S0zLYllkL2jjVZtkr9H9o78Ba69XON8XwLoAAAAASUVORK5CYII="
                    alt=""
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center center",
                      opacity: 0,
                      transitionDelay: "500ms",
                    }}
                  />
                </picture>
                <picture>
                  <source
                    media="(max-width: 600px)"
                    srcSet="https://www.phonepe.com/webstatic/6444/static/ddaf85bfc69927bda4bc106d3e67079e/69585/why-phonepe-bird-mobile.png 200w,
https://www.phonepe.com/webstatic/6444/static/ddaf85bfc69927bda4bc106d3e67079e/497c6/why-phonepe-bird-mobile.png 400w,
https://www.phonepe.com/webstatic/6444/static/ddaf85bfc69927bda4bc106d3e67079e/69248/why-phonepe-bird-mobile.png 497w"
                  />
                  <source
                    srcSet="https://www.phonepe.com/webstatic/6444/static/859496e73f31c1694dbecb6b83ee9860/69585/why-phonepe-bird-desktop.png 200w,
https://www.phonepe.com/webstatic/6444/static/859496e73f31c1694dbecb6b83ee9860/497c6/why-phonepe-bird-desktop.png 400w,
https://www.phonepe.com/webstatic/6444/static/859496e73f31c1694dbecb6b83ee9860/ee604/why-phonepe-bird-desktop.png 800w,
https://www.phonepe.com/webstatic/6444/static/859496e73f31c1694dbecb6b83ee9860/b9329/why-phonepe-bird-desktop.png 993w"
                  />
                  <img
                    srcSet="https://www.phonepe.com/webstatic/6444/static/859496e73f31c1694dbecb6b83ee9860/69585/why-phonepe-bird-desktop.png 200w,
https://www.phonepe.com/webstatic/6444/static/859496e73f31c1694dbecb6b83ee9860/497c6/why-phonepe-bird-desktop.png 400w,
https://www.phonepe.com/webstatic/6444/static/859496e73f31c1694dbecb6b83ee9860/ee604/why-phonepe-bird-desktop.png 800w,
https://www.phonepe.com/webstatic/6444/static/859496e73f31c1694dbecb6b83ee9860/b9329/why-phonepe-bird-desktop.png 993w"
                    alt="{AppConst.LogoName} Careers Bird!"
                    loading="lazy"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center center",
                      opacity: 1,
                      transition: "opacity 500ms ease 0s",
                    }}
                  />
                </picture>
                <noscript>
                  &lt;picture&gt;&lt;source media="(max-width: 600px)"
                  srcset="https://www.phonepe.com/webstatic/6444/static/ddaf85bfc69927bda4bc106d3e67079e/69585/why-phonepe-bird-mobile.png
                  200w,
                  https://www.phonepe.com/webstatic/6444/static/ddaf85bfc69927bda4bc106d3e67079e/497c6/why-phonepe-bird-mobile.png
                  400w,
                  https://www.phonepe.com/webstatic/6444/static/ddaf85bfc69927bda4bc106d3e67079e/69248/why-phonepe-bird-mobile.png
                  497w" /&gt;&lt;source
                  srcset="https://www.phonepe.com/webstatic/6444/static/859496e73f31c1694dbecb6b83ee9860/69585/why-phonepe-bird-desktop.png
                  200w,
                  https://www.phonepe.com/webstatic/6444/static/859496e73f31c1694dbecb6b83ee9860/497c6/why-phonepe-bird-desktop.png
                  400w,
                  https://www.phonepe.com/webstatic/6444/static/859496e73f31c1694dbecb6b83ee9860/ee604/why-phonepe-bird-desktop.png
                  800w,
                  https://www.phonepe.com/webstatic/6444/static/859496e73f31c1694dbecb6b83ee9860/b9329/why-phonepe-bird-desktop.png
                  993w" /&gt;&lt;img loading="lazy"
                  srcset="https://www.phonepe.com/webstatic/6444/static/859496e73f31c1694dbecb6b83ee9860/69585/why-phonepe-bird-desktop.png
                  200w,
                  https://www.phonepe.com/webstatic/6444/static/859496e73f31c1694dbecb6b83ee9860/497c6/why-phonepe-bird-desktop.png
                  400w,
                  https://www.phonepe.com/webstatic/6444/static/859496e73f31c1694dbecb6b83ee9860/ee604/why-phonepe-bird-desktop.png
                  800w,
                  https://www.phonepe.com/webstatic/6444/static/859496e73f31c1694dbecb6b83ee9860/b9329/why-phonepe-bird-desktop.png
                  993w" src="" alt="{AppConst.LogoName} Careers Bird!"
                  style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
                </noscript>
              </div>
            </div>
            <div
              className="why-info-column"
              id="card1"
              style={{ opacity: 1, top: 0 }}
            >
              <div className="why-info-card">
                <h3>Learning</h3>
                <p>
                  Harness the power of knowledge with impactful and accessible
                  learning
                </p>
              </div>
            </div>
            <div
              className="why-info-column"
              id="card2"
              style={{ opacity: 1, top: 0 }}
            >
              <div className="why-info-card">
                <h3>Impact</h3>
                <p>Work to make a difference</p>
              </div>
            </div>
            <div
              className="why-info-column"
              id="card3"
              style={{ opacity: 1, top: 0 }}
            >
              <div className="why-info-card">
                <h3>Autonomy</h3>
                <p>
                  Work with a sense of ownership, while taking decisions to
                  accelerate results
                </p>
              </div>
            </div>
            <div className="why-stairs-container" style={{ top: 100 }}>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTExNyIgaGVpZ2h0PSI1ODYiIHZpZXdCb3g9IjAgMCAxMTE3IDU4NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuODUzNTE2IDU4NS45NjlWNDI1LjVIMzcyLjg1NFYyOTYuNUg3MTMuMzU0VjE3MEgxMTIwLjM1VjFIMTUwMi4zNSIgc3Ryb2tlPSJ1cmwoI3BhaW50MF9saW5lYXJfNDAxXzEwODQwKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzQwMV8xMDg0MCIgeDE9IjYwMS4zNTMiIHkxPSIxMTYuNSIgeDI9IjYyNC4xOTciIHkyPSI1MTIuMDU5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC41MTg4OSIgc3RvcC1jb2xvcj0iIzc2NEM5NyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNBOUE5QTkiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="
                alt="Why {AppConst.LogoName} Stairs Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyFpsJob