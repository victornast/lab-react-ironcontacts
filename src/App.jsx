import React from 'react';
import contacts from './contacts.json';
import './App.css';

function App() {
  class IronContacts extends React.Component {
    constructor() {
      super();
      this.state = {
        selectedContacts: contacts.slice(0, 5)
      };
    }

    selectRandomContact = () => {
      const newContacts = contacts.filter(
        (contact) => !this.state.selectedContacts.includes(contact)
      );
      let randomIndex = Math.floor(Math.random() * newContacts.length);
      return newContacts[randomIndex];
    };

    addRandomContact = () => {
      const copyContacts = [...this.state.selectedContacts];
      let randomContact = this.selectRandomContact();
      if (randomContact) {
        copyContacts.push(randomContact);
        this.setState({ selectedContacts: copyContacts });
      }
    };

    sortByName = () => {
      const copyContacts = [...this.state.selectedContacts];
      copyContacts.sort((a, b) => (a.name > b.name ? 1 : -1));
      this.setState({ selectedContacts: copyContacts });
    };

    sortByPopularity = () => {
      const copyContacts = [...this.state.selectedContacts];
      copyContacts.sort((a, b) => b.popularity - a.popularity);
      this.setState({ selectedContacts: copyContacts });
    };

    deleteContact(index) {
      const copyContacts = [...this.state.selectedContacts];
      copyContacts.splice(index, 1);
      this.setState({ selectedContacts: copyContacts });
    }

    render() {
      return (
        <section className="iron-contacts">
          <nav className="nav">
            <button className="btn" onClick={this.addRandomContact}>
              Add Random Contact
            </button>
            <button className="btn" onClick={this.sortByName}>
              Sort by Name
            </button>
            <button className="btn" onClick={this.sortByPopularity}>
              Sort by Popularity
            </button>
          </nav>
          <section className="table">
            <table>
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.selectedContacts.map((contact) => {
                  const contactIndex = this.state.selectedContacts.indexOf(
                    contact
                  );
                  return (
                    <tr style={{ textAlign: 'left' }} key={contact.id}>
                      <td>
                        <img
                          className="celeb-image"
                          src={contact.pictureUrl}
                          alt={contact.name}
                        />
                      </td>
                      <td className="celeb-name">
                        <h4>{contact.name.split(' ').slice(0, -1)}</h4>
                        <h3>
                          {
                            contact.name.split(' ')[
                              contact.name.split(' ').length - 1
                            ]
                          }
                        </h3>
                      </td>
                      <td className="celeb-pop">
                        {contact.popularity.toFixed(2)}
                      </td>
                      <td className="celeb-action">
                        <button
                          className="btn"
                          onClick={() => this.deleteContact(contactIndex)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
        </section>
      );
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">IronContacts</h1>
      </header>
      <IronContacts />
      <div className="bg">
        <svg
          className="bg__animated-svg"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
          viewBox="0 0 2330 970"
        >
          <g transform="translate(1165,485) scale(1,1) translate(-1165,-485)">
            <linearGradient
              id="lg-0.336035200479324"
              x1="0"
              x2="1"
              y1="0"
              y2="0"
            >
              <stop stop-color="#F5CE00" offset="0"></stop>
              <stop stop-color="#FF7C00" offset="1"></stop>
            </linearGradient>
            <path d="" fill="url(#lg-0.336035200479324)" opacity="0.4">
              <animate
                attributeName="d"
                dur="50s"
                repeatCount="indefinite"
                keyTimes="0;0.333;0.667;1"
                calcmod="spline"
                keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                begin="0s"
                values="M0 0L 0 646.3227258316251Q 233 719.5641499752537  466 675.8920822003158T 932 578.0268007476418T 1398 520.446867425956T 1864 643.4030451319101T 2330 275.11304819675564L 2330 0 Z;M0 0L 0 904.0421261537224Q 233 893.427225578669  466 860.2097751752755T 932 528.0834639619122T 1398 487.32748156200955T 1864 548.5657716956499T 2330 560.4395391152975L 2330 0 Z;M0 0L 0 780.8747482088855Q 233 606.4645561094555  466 591.3011042095592T 932 691.2588518153734T 1398 591.459112929537T 1864 522.1917940485262T 2330 500.7541258776771L 2330 0 Z;M0 0L 0 646.3227258316251Q 233 719.5641499752537  466 675.8920822003158T 932 578.0268007476418T 1398 520.446867425956T 1864 643.4030451319101T 2330 275.11304819675564L 2330 0 Z"
              ></animate>
            </path>
            <path d="" fill="url(#lg-0.336035200479324)" opacity="0.4">
              <animate
                attributeName="d"
                dur="50s"
                repeatCount="indefinite"
                keyTimes="0;0.333;0.667;1"
                calcmod="spline"
                keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                begin="-10s"
                values="M0 0L 0 960.6236290533508Q 233 668.2396729553772  466 653.76827913848T 932 723.9781511353236T 1398 442.92750006317794T 1864 464.80223487425184T 2330 365.8828062616127L 2330 0 Z;M0 0L 0 763.8867946876057Q 233 637.7392112524533  466 623.5337297239748T 932 657.4591375988255T 1398 536.2800866954701T 1864 652.4178207735988T 2330 335.6051077428054L 2330 0 Z;M0 0L 0 825.1282125945918Q 233 779.0003921232624  466 753.9805138424407T 932 693.4549525157222T 1398 505.10977159140606T 1864 432.1103789709291T 2330 262.11743306323456L 2330 0 Z;M0 0L 0 960.6236290533508Q 233 668.2396729553772  466 653.76827913848T 932 723.9781511353236T 1398 442.92750006317794T 1864 464.80223487425184T 2330 365.8828062616127L 2330 0 Z"
              ></animate>
            </path>
            <path d="" fill="url(#lg-0.336035200479324)" opacity="0.4">
              <animate
                attributeName="d"
                dur="50s"
                repeatCount="indefinite"
                keyTimes="0;0.333;0.667;1"
                calcmod="spline"
                keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                begin="-20s"
                values="M0 0L 0 855.3454796283725Q 233 765.2939897363617  466 735.4863733055669T 932 594.1804761071219T 1398 645.4023575929823T 1864 494.7815333250536T 2330 317.2879731250465L 2330 0 Z;M0 0L 0 833.2152061024028Q 233 806.0904283231729  466 785.8348583975775T 932 812.7231474433188T 1398 617.1842140150882T 1864 400.24985055191326T 2330 330.68408469189046L 2330 0 Z;M0 0L 0 963.7080832141955Q 233 918.9437779373744  466 879.6925819119236T 932 572.7588315601608T 1398 485.7912067603797T 1864 452.56414765493616T 2330 391.35991194778546L 2330 0 Z;M0 0L 0 855.3454796283725Q 233 765.2939897363617  466 735.4863733055669T 932 594.1804761071219T 1398 645.4023575929823T 1864 494.7815333250536T 2330 317.2879731250465L 2330 0 Z"
              ></animate>
            </path>
            <path d="" fill="url(#lg-0.336035200479324)" opacity="0.4">
              <animate
                attributeName="d"
                dur="50s"
                repeatCount="indefinite"
                keyTimes="0;0.333;0.667;1"
                calcmod="spline"
                keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                begin="-30s"
                values="M0 0L 0 955.3763587685443Q 233 702.2762538030048  466 679.0643420313711T 932 724.482827792285T 1398 520.832870840517T 1864 687.9784517010237T 2330 413.1208171896729L 2330 0 Z;M0 0L 0 915.5044114932771Q 233 733.2059287736693  466 702.0805453174015T 932 627.2780774936687T 1398 434.62127964853005T 1864 373.80749647146786T 2330 357.2860473851186L 2330 0 Z;M0 0L 0 708.2220625698252Q 233 906.5025263113516  466 884.2175727963411T 932 644.9044069979732T 1398 497.3582783704341T 1864 533.4551519499503T 2330 412.2498958756584L 2330 0 Z;M0 0L 0 955.3763587685443Q 233 702.2762538030048  466 679.0643420313711T 932 724.482827792285T 1398 520.832870840517T 1864 687.9784517010237T 2330 413.1208171896729L 2330 0 Z"
              ></animate>
            </path>
            <path d="" fill="url(#lg-0.336035200479324)" opacity="0.4">
              <animate
                attributeName="d"
                dur="50s"
                repeatCount="indefinite"
                keyTimes="0;0.333;0.667;1"
                calcmod="spline"
                keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                begin="-40s"
                values="M0 0L 0 740.9243174965767Q 233 859.1446784560862  466 807.7977019304035T 932 663.3741681425213T 1398 503.47404422268306T 1864 376.0703210672556T 2330 604.9602240342776L 2330 0 Z;M0 0L 0 882.053837008979Q 233 889.8699726616799  466 849.2261740607828T 932 787.1141915214163T 1398 587.5387213192259T 1864 483.06321828975996T 2330 353.0414817433095L 2330 0 Z;M0 0L 0 661.4163261601509Q 233 899.0986336781714  466 863.4327907800359T 932 561.0501323737017T 1398 402.6858645912142T 1864 327.4474063994372T 2330 543.9300795272832L 2330 0 Z;M0 0L 0 740.9243174965767Q 233 859.1446784560862  466 807.7977019304035T 932 663.3741681425213T 1398 503.47404422268306T 1864 376.0703210672556T 2330 604.9602240342776L 2330 0 Z"
              ></animate>
            </path>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default App;
