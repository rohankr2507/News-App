import React, { Component } from 'react'
import Newsitem from './Newsitem'

import Spinner from './Spinner'

import PropTypes from 'prop-types'

export default class News extends Component {

    static defaultProps = {
        pageSize: 8,
        country: "in",
        category: "general"
    }

    static propTypes = {
        pageSize: PropTypes.number,
        country: PropTypes.string,
        category: PropTypes.string
    }

    articles = [
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Ukraine says it repulsed Russian bid to cross border - BBC.com",
            "description": "The attempt came during an attack on a town in the northeastern Kharkiv region, says the military.",
            "url": "https://www.bbc.com/news/articles/c6pyv8q94g1o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/b2e2/live/7ecd9ee0-0ebc-11ef-8f3e-f3c169ee7041.jpg",
            "publishedAt": "2024-05-10T12:00:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Tim Loh",
            "title": "Novavax Soars on $1.2 Billion Sanofi Vaccine Licensing Deal - Yahoo Finance",
            "description": "(Bloomberg) -- Novavax Inc. shares surged after the company signed a $1.2 billion licensing agreement with Sanofi that includes commercializing a combined...",
            "url": "https://finance.yahoo.com/news/sanofi-inks-1-2-billion-082615895.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/RhHzwCfneYgE_iIPEKeqUw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03Njk-/https://media.zenfs.com/en/bloomberg_markets_842/d0a81c2baef777ee1b0cc5a34b10a173",
            "publishedAt": "2024-05-10T11:27:20Z",
            "content": "(Bloomberg) -- Novavax Inc. shares surged after the company signed a $1.2 billion licensing agreement with Sanofi that includes commercializing a combined Covid-19 and flu shot.\r\nMost Read from Bloom… [+2554 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "Li Cohen",
            "title": "Rare severe geomagnetic storm watch issued for first time in nearly 20 years amid \"unusual\" solar event - CBS News",
            "description": "The sunspot responsible for the odd series of strong solar flares is so big you can see it with your own eyes from Earth.",
            "url": "https://www.cbsnews.com/news/severe-geomagnetic-storm-watch-issued-unusual-solar-event/",
            "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/05/10/38a134a8-f09a-4e45-ac07-dc6b36226e61/thumbnail/1200x630/453255000498495827d3d13271b1dc0e/screenshot-2024-05-10-at-6-56-42-am.png?v=218688c1357f974b9630d4fa8914721c",
            "publishedAt": "2024-05-10T11:07:00Z",
            "content": "Sunspot could bring northern lights to New England \r\nSunspot could bring northern lights to New England02:00\r\nA severe G4 geomagnetic storm could emerge on Friday, triggering a watch for a storm of t… [+3005 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Annika Kim Constantino",
            "title": "Moderna says FDA delayed RSV vaccine approval to end of May - CNBC",
            "description": "The FDA has not informed Moderna of any issues related to the vaccine's safety, efficacy or quality that would prevent its approval, the biotech company said.",
            "url": "https://www.cnbc.com/2024/05/10/moderna-says-rsv-vaccine-fda-approval-delayed-to-end-of-may.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107261604-1687528288611-gettyimages-1239618774-npekiaridis_vaccines-4.jpeg?v=1715288880&w=1920&h=1080",
            "publishedAt": "2024-05-10T11:00:01Z",
            "content": "Moderna on Friday said the Food and Drug Administration has delayed the approval of its vaccine for respiratory syncytial virus to the end of May due to \"administrative constraints\" at the agency.\r\nT… [+1864 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "JAKE OFFENHARTZ, JENNIFER PELTZ, MICHAEL R. SISAK, ALANNA DURKIN RICHER",
            "title": "Trump hush money trial: Michael Cohen awaits turn after graphic Stormy Daniels account - The Associated Press",
            "description": "The third week of testimony in Donald Trump’s hush money trial is drawing to a close. It comes after jurors heard the dramatic, if not downright seamy, account of Stormy Daniels’ alleged sexual encounter with the former president. Meanwhile, prosecutors are g…",
            "url": "https://apnews.com/article/trump-trial-hush-money-stormy-daniels-cohen-ddef05884265e4d6217b55a89304b878",
            "urlToImage": "https://dims.apnews.com/dims4/default/0672701/2147483647/strip/true/crop/5392x3033+0+280/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F14%2Fba%2F1b7afe80344d95bda4f4d8f82e0e%2F8fae05b134c3472b8b420ac20a411cff",
            "publishedAt": "2024-05-10T10:54:00Z",
            "content": "NEW YORK (AP) The third week of testimony in Donald Trumps hush money trial draws to a close Friday after jurors heard the dramatic, if not downright seamy, account of porn actor Stormy Daniels, whil… [+4647 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Matias Grez",
            "title": "‘Pretty unheard of’: Caitlin Clark draws 13,000 in home preseason debut as Indiana Fever win 83-80 - CNN",
            "description": "More than 13,000 fans were in attendance as Caitlin Clark made her home preseason debut on Thursday in an 83-80 victory for the Indiana Fever over the Atlanta Dream.",
            "url": "https://www.cnn.com/2024/05/10/sport/caitlin-clark-home-debut-indiana-fever-spt-intl/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2151675521.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-05-10T10:38:00Z",
            "content": "More than 13,000 fans were in attendance as Caitlin Clark made her home preseason debut on Thursday in an 83-80 victory for the Indiana Fever over the Atlanta Dream.\r\nThe atmosphere inside Gainbridge… [+2350 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NBCSports.com"
            },
            "author": "Mike Florio",
            "title": "Netflix closes is on stealing Christmas games - NBC Sports",
            "description": "Negotiations for December 25 reportedly delayed schedule release.",
            "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/netflix-closes-is-on-stealing-christmas-games",
            "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/0d6f130/2147483647/strip/true/crop/8001x4501+0+417/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fe1%2Fba%2Fdac09cd54100b79b11060523fdf0%2Fhttps-api-imagn.com%2Frest%2Fdownload%2FimageID%3D17412480",
            "publishedAt": "2024-05-10T10:31:39Z",
            "content": "The NFLs pivot to a pair of Christmas games this year, after saying they wouldnt do it, will apparently bring a new broadcast partner to the table.\r\nJohn Ourand of Puck writes this: \"[I]t looks like … [+854 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "BBC.com",
            "title": "Harry and Meghan: Duke and duchess arrive in Nigeria - BBC.com",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiLmh0dHBzOi8vd3d3LmJiYy5jb20vbmV3cy9hcnRpY2xlcy9jcDRnOXp6ZXFsMW_SATJodHRwczovL3d3dy5iYmMuY29tL25ld3MvYXJ0aWNsZXMvY3A0Zzl6emVxbDFvLmFtcA?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-05-10T10:31:11Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "The Daily Pennsylvanian",
            "title": "Police in riot gear arrest over one dozen protesters, including Penn students, at Gaza Solidarity Encampment - The Daily Pennsylvanian",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiSmh0dHBzOi8vd3d3LnRoZWRwLmNvbS9hcnRpY2xlLzIwMjQvMDUvcGVubi1wYWxlc3RpbmUtZ2F6YS1wcm90ZXN0cy1hcnJlc3Rz0gEA?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-05-10T10:23:22Z",
            "content": null
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "The Verge",
            "title": "OpenAI could unveil its Google search competitor on Monday - The Verge",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiXmh0dHBzOi8vd3d3LnRoZXZlcmdlLmNvbS8yMDI0LzUvMTAvMjQxNTM0MjEvb3BlbmFpLWNoYXRncHQtZ29vZ2xlLXNlYXJjaC1jb21wZXRpdG9yLXNlcnZpY2UtaW_SAQA?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-05-10T10:14:33Z",
            "content": null
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters",
            "title": "Trump prosecutors prepare to call final witnesses in hush money trial - Reuters",
            "description": null,
            "url": "https://www.reuters.com/world/us/trump-prosecutors-prepare-call-final-witnesses-hush-money-trial-2024-05-10/",
            "urlToImage": null,
            "publishedAt": "2024-05-10T10:08:00Z",
            "content": null
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "GABRIELA SÁ PESSOA Associated Press, MAURICIO SAVARESE Associated Press",
            "title": "Caramelo, the Brazilian horse stranded on a roof by floods, is rescued after stirring the nation - ABC News",
            "description": "A horse that was perilously stranded on a rooftop by Brazil's deadly floods has been rescued",
            "url": "https://abcnews.go.com/International/wireStory/caramelo-brazilian-horse-stranded-roof-floods-rescued-after-110086383",
            "urlToImage": "https://i.abcnewsfe.com/a/33d850e2-e327-4918-8f52-1141fe338ff9/wirestory_d50d1c2436245c24a0094d4106b60e85_16x9.jpg?w=1600",
            "publishedAt": "2024-05-10T10:00:15Z",
            "content": "CANOAS, Brazil -- A Brazilian horse nicknamed Caramelo by social media users garnered national attention after a television news helicopter filmed him stranded on a rooftop in southern Brazil, where … [+4063 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Tamara Qiblawi",
            "title": "Israeli whistleblowers detail horror of shadowy detention facility for Palestinians - CNN",
            "description": "At a military base that now doubles as a detention center in Israel’s Negev desert, an Israeli working at the facility snapped two photographs of a scene that he says continues to haunt him.",
            "url": "https://www.cnn.com/2024/05/10/middleeast/israel-sde-teiman-detention-whistleblowers-intl-cmd/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/image-3-20240506154006345.png?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-05-10T09:28:00Z",
            "content": "At a military base that now doubles as a detention center in Israels Negev desert, an Israeli working at the facility snapped two photographs of a scene that he says continues to haunt him.\r\nRows of … [+18760 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": "NBC News",
            "title": "Justin and Hailey Bieber announce pregnancy on Instagram - NBC News",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiZ2h0dHBzOi8vd3d3Lm5iY25ld3MuY29tL25vdy92aWRlby9qdXN0aW4tYW5kLWhhaWxleS1iaWViZXItYW5ub3VuY2UtcHJlZ25hbmN5LW9uLWluc3RhZ3JhbS0yMTA2MTc0MTM1NjHSATdodHRwczovL3d3dy5uYmNuZXdzLmNvbS9uZXdzL2FtcC12aWRlby9tbXZvMjEwNjE3NDEzNTYx?oc=5",
            "urlToImage": null,
            "publishedAt": "2024-05-10T08:42:41Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "GMA"
            },
            "author": "Mason Leib",
            "title": "Miss USA names new 2023 titleholder after former winner resigned title - Good Morning America",
            "description": "The Miss USA pageant has named a successor to the Miss USA title after Noelia Voigt resigned on Monday.",
            "url": "https://goodmorningamerica.com/culture/story/miss-usa-names-new-2023-titleholder-after-former-110085706",
            "urlToImage": "https://s.abcnews.com/images/GMA/Savannah-Gankiewicz-usat-gmh-240509_1715284178789_hpMain_16x9_992.jpg",
            "publishedAt": "2024-05-10T08:26:15Z",
            "content": "The Miss USA pageant named the new 2023 titleholder as Savannah Gankiewicz, Miss Hawaii USA and the first runner-up in the 2023 Miss USA competition on Thursday, according to the pageant's Instagram … [+1856 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "India Today"
            },
            "author": "Daphne Clarance",
            "title": "A 30-year-long Harvard study reveals ultra-processed foods linked to early death - India Today",
            "description": "A 30-year study found that people who regularly consumed ultra-processed meats faced a 13 higher likelihood of premature death",
            "url": "https://www.indiatoday.in/health/story/a-30-year-long-harvard-study-reveals-ultra-processed-foods-linked-to-early-death-2537507-2024-05-10",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202405/dry-uncooked-instant-noodles-104210396-16x9_0.jpg?VersionId=0T6z7c8LcNTKV34Ew5NH89FjMqAP1R_z",
            "publishedAt": "2024-05-10T07:50:39Z",
            "content": "A recent study by Harvard University, spanning over 30 years and tracking 1,14,000 participants, has highlighted the risks associated with consuming ultra-processed foods (UPF). \r\nHigher consumption … [+2746 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Suban Abdulla, David Milliken",
            "title": "UK exits recession with fastest growth in nearly three years - Reuters UK",
            "description": "Britain's economy grew by the most in nearly three years in the first quarter of 2024, ending the shallow recession it entered in the second half of last year and delivering a boost to Prime Minister Rishi Sunak ahead of an election.",
            "url": "https://www.reuters.com/world/uk/uk-economy-grows-by-06-first-quarter-ons-data-shows-2024-05-10/",
            "urlToImage": "https://www.reuters.com/resizer/v2/WP6CJG7VUFJAZF6PDZ4TEGUSWU.jpg?auth=23b7452b91bc5dc72352e20c50021935c12081c1f6385fa961c4f80abfde803b&height=1005&width=1920&quality=80&smart=true",
            "publishedAt": "2024-05-10T07:45:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Harvard Crimson"
            },
            "author": null,
            "title": "Pro-Palestine Students Reject Harvard President's Proposal to End Encampment | News - Harvard Crimson",
            "description": "Members of the pro-Palestine encampment rejected a proposal from interim University President Alan M. Garber ’76 to end their two-week occupation of Harvard Yard and avoid receiving involuntary leave of absence notices.",
            "url": "https://www.thecrimson.com/article/2024/5/10/protesters-reject-proposal-encampment/",
            "urlToImage": "https://s3.amazonaws.com/thumbnails.thecrimson.com/photos/2024/04/26/115148_1371058.jpg.2000x1333_q95_crop-smart_upscale.jpg",
            "publishedAt": "2024-05-10T07:00:00Z",
            "content": "Updated May 10, 2024, at 2:11 a.m.\r\nMembers of the pro-Palestine encampment rejected a proposal from interim University President Alan M. Garber 76 to end their two-week occupation of Harvard Yard an… [+6090 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters",
            "title": "Exclusive: China's Zeekr prices US IPO at top of range to raise $441 million, source says - Reuters",
            "description": null,
            "url": "https://www.reuters.com/markets/deals/chinese-ev-maker-zeekr-prices-us-ipo-top-range-raise-441-million-source-says-2024-05-09/",
            "urlToImage": null,
            "publishedAt": "2024-05-10T06:58:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Gaza war: Netanyahu says Israel can 'stand alone' if US halts arms shipments - BBC.com",
            "description": "Israeli leader says his country will \"stand alone\" and \"fight with fingernails\" if shipments are halted.",
            "url": "https://www.bbc.com/news/world-middle-east-68980826",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/53BF/production/_133293412_netanyahu.jpg",
            "publishedAt": "2024-05-10T06:11:15Z",
            "content": null
        }
    ]

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    constructor(props) {
        super(props);
        console.log("Hello I'm a constructor from News component");
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            totalResults: 0
        }

        document.title = `${this.capitalizeFirstLetter(this.props.category)} - News App`
    }

    async updateNews() {
        this.props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        this.props.setProgress(30)
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.props.setProgress(70)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100)
    }

    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ee453f88a115487bad5fe4f09beb322d&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({
        //     articles: parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loading: false
        // })

        this.updateNews()
    }

    handleNextClick = async () => {
        // console.log("Next");
        // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ee453f88a115487bad5fe4f09beb322d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        //     this.setState({ loading: true });
        //     let data = await fetch(url);
        //     let parsedData = await data.json();
        //     // console.log(parsedData);

        //     this.setState({
        //         page: this.state.page + 1,
        //         articles: parsedData.articles,
        //         loading: false
        //     })
        // }

        this.setState({
            page: this.state.page + 1
        })
        this.updateNews()
    }

    handlePrevClick = async () => {
        // console.log("Previous");
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ee453f88a115487bad5fe4f09beb322d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // // console.log(parsedData);

        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parsedData.articles,
        //     loading: false
        // })

        this.setState({
            page: this.state.page - 1
        })

        this.updateNews()
    }

    render() {
        return (
            <div className='container my-4'>
                <h1 className='text-center' style={{ marginTop: '4.8rem' }}>News App - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>

                {this.state.loading && <Spinner />}

                <div className="row my-3">
                    {!this.state.loading && this.state.articles.map((element) => {
                        // console.log(element);
                        return <div className="col-md-3 my-2" key={element.url}>
                            <Newsitem title={element.title.slice(0, 45)} description={element.description !== null ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source} />
                        </div>
                    })}

                    {/* <div className="col-md-4">
                        <Newsitem title="myTitle" description="myDesc" imageUrl="/" newsUrl="TODO"/>
                    </div>
                    <div className="col-md-4">
                        <Newsitem title="myTitle" description="myDesc" imageUrl="/" newsUrl="TODO"/>
                    </div> */}

                </div>

                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Prev</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}
