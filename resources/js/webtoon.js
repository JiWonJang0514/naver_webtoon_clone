window.addEventListener('load', () => {
    renderTest();
});

let webtoon_info = {
    id: 1, //int
    cover: '',
    title: '독립일기',
    writer: '자까',
    introduction: `처음으로 나만의 집이 생긴다면?
                    자까 작가의 나혼자 사는 이야기`,
    genre: ['에피소드', '일상'],
    age: '전체연령가', //연령가
    like: 100000, //10만부터 99,999+로 표시
    is_cuttoon: true, //boolean
    day: ['목', '일'] //연재요일
}

let episode_list = {
    webtoon_id: 1, //int
    data: [
        {
            idx: 20, //int
            thumbnail: '',
            title: '시즌2 93화 한강공원 운동법',
            stars: 9.96, //float
            upload_date: '2022.08.24'
        },
        {
            idx: 19,
            thumbnail: '',
            title: '시즌2 92화 유기견 보호소 봉사활동',
            stars: 9.98,
            upload_date: '2022.08.20'
        },
        {
            idx: 18,
            thumbnail: '',
            title: '시즌2 91화 김치찜 없애기 대작전',
            stars: 9.96,
            upload_date: '2022.08.17'
        },
        {
            idx: 17,
            thumbnail: '',
            title: '시즌2 90화 감자의 계절',
            stars: 9.98, 
            upload_date: '2022.08.13'
        },
        {
            idx: 16,
            thumbnail: '',
            title: '시즌2 89화 내 생에 가장 알찬 24시간',
            stars: 9.96, 
            upload_date: '2022.08.10'
        },
        {
            idx: 15, 
            thumbnail: '',
            title: '시즌2 88화 덕력이 부족해',
            stars: 9.96,
            upload_date: '2022.08.06'
        },
        {
            idx: 14,
            thumbnail: '',
            title: '시즌2 87화 강제 새벽 기상',
            stars: 9.97,
            upload_date: '2022.08.03'
        },
        {
            idx: 13,
            thumbnail: '',
            title: '시즌2 86화 미친 습도와 미친 호르몬',
            stars: 9.96,
            upload_date: '2022.07.30'
        },
        {
            idx: 12, 
            thumbnail: '',
            title: '시즌2 85화 빨래에서 뭔가 나왔다',
            stars: 9.96, 
            upload_date: '2022.07.27'
        },
        {
            idx: 11,
            thumbnail: '',
            title: '시즌2 84화 어서 와 우리 집은 처음이지',
            stars: 9.98,
            upload_date: '2022.07.23'
        },
        {
            idx: 10,
            thumbnail: '',
            title: '시즌2 83화 이사 준비',
            stars: 9.98, 
            upload_date: '2022.07.20'
        },
        {
            idx: 9,
            thumbnail: '',
            title: '시즌2 82화 추억 팔이',
            stars: 9.98,
            upload_date: '2022.07.16'
        },
        {
            idx: 8,
            thumbnail: '',
            title: '시즌2 81화 잠자는 집 속의 강아지',
            stars: 9.97,
            upload_date: '2022.07.13'
        },
        {
            idx: 7,
            thumbnail: '',
            title: '시즌2 80화 제주여행 6일차',
            stars: 9.97,
            upload_date: '2022.07.09'
        },
        {
            idx: 6,
            thumbnail: '',
            title: '시즌2 79화 제주여행 5일차',
            stars: 9.97,
            upload_date: '2022.07.06'
        },
        {
            idx: 5,
            thumbnail: '',
            title: '시즌2 78화 제주여행 4일차',
            stars: 9.97,
            upload_date: '2022.07.02'
        },
        {
            idx: 4,
            thumbnail: '',
            title: '시즌2 77화 제주여행 3일차',
            stars: 9.97,
            upload_date: '2022.06.29'
        },
        {
            idx: 3,
            thumbnail: '',
            title: '시즌2 76화 제주여행 2일차',
            stars: 9.97,
            upload_date: '2022.06.25'
        },
        {
            idx: 2,
            thumbnail: '',
            title: '시즌2 75화 제주여행 1일차',
            stars: 9.97, 
            upload_date: '2022.06.22'
        },
        {
            idx: 1,
            thumbnail: '',
            title: '시즌2 74화 무선 이어폰 적응기',
            stars: 9.97,
            upload_date: '2022.06.18'
        }
    ]
};

let current_ep_page = 1; //int
let current_webtoon_id = 1; //int



// 셀렉터
function q(selector) {
    return document.querySelector(selector);
}
// 셀렉터all
function qa(selector) {
    return document.querySelectorAll(selector);
}

// 뿌려보기
function renderTest() {
    // webtoon_info
    let info_html = '';

    info_html += `<div>
        <img src="${webtoon_info.cover}">::
        ${webtoon_info.title}::${webtoon_info.is_cuttoon ? '컷툰' : ''}::
        ${webtoon_info.writer}::${webtoon_info.introduction}::`;
    for(let e of webtoon_info.genre) {
        info_html += `${e}&nbsp;&nbsp;`;
    }
    info_html += `${webtoon_info.age}::${webtoon_info.like}
        </div>`;

    q('body').innerHTML += info_html;

    // episode_list
    let ep_html = '<ol>';

    for(let e of episode_list.data) {
        ep_html += `<li>
            <img src="${e.thumbnail}">::${e.title}::${e.stars}::${e.upload_date}
            </li>`;
    }
    ep_html += `</ol>`;

    q('body').innerHTML += ep_html;
}