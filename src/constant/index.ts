import images from "../frontend-images";
import faker from "faker";

const NEWS_DATA = [
  {
    image: images.column1,
    time: "2021.05.17\t23:25",
    description:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    image: images.column2,
    time: "2021.05.17\t23:25",
    description:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    image: images.column3,
    time: "2021.05.17\t23:25",
    description:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    image: images.column4,
    time: "2021.05.17\t23:25",
    description:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    image: images.column5,
    time: "2021.05.17\t23:25",
    description:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    image: images.column6,
    time: "2021.05.17\t23:25",
    description:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    image: images.column7,
    time: "2021.05.17\t23:25",
    description:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    image: images.column8,
    time: "2021.05.17\t23:25",
    description:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
];

const CHALLENGE_DATA = [
  {
    image: images.MyRecommend1,
    title: "BODY RECORD",
    description: "自分のカラダの記録",
  },
  {
    image: images.MyRecommend2,
    title: "MY EXERCISE",
    description: "自分の運動の記録",
  },
  {
    image: images.MyRecommend3,
    title: "MY DIARY",
    description: "自分の日記",
  },
];

const MEMU_DATA = [
  {
    image: images.d01,
    value: "05.21.Morning",
  },
  {
    image: images.d02,
    value: "05.21.Lunch",
  },
  {
    image: images.d03,
    value: "05.21.Dinner",
  },
  {
    image: images.d04,
    value: "05.21.Snack",
  },
  {
    image: images.d05,
    value: "05.20.Morning",
  },
  {
    image: images.d06,
    value: "05.20.Lunch",
  },
  {
    image: images.d07,
    value: "05.20.Dinner",
  },
  {
    image: images.d08,
    value: "05.21.Snack",
  },
];

const SUB_MENU = [
  {
    value: "自分の記録",
  },
  {
    value: "体重グラフ",
  },
  {
    value: "目標",
  },
  {
    value: "選択中のコース",
  },
  {
    value: "コラム一覧",
  },
  {
    value: "コラム一覧",
  },
];

const RECOMMENT_DATA = [
  {
    title: "RECOMMENDED\nCOLUMN",
    description: "オススメ",
  },
  {
    title: "RECOMMENDED\nDIET",
    description: "ダイエット",
  },
  {
    title: "RECOMMENDED\nBEAUTY",
    description: "美容",
  },
  {
    title: "RECOMMENDED\nHEALTH",
    description: "健康",
  },
];

const CHART_OPPTION = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false, //This will do the task
    },
    title: {
      display: false,
    },
  },
  legend: {
    display: false,
  },
  scales: {
    yAxes: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    xAxes: {
      grid: {
        drawBorder: true,
        color: "#FFFFFF",
        borderColor: "#414141",
      },
      ticks: {
        beginAtZero: false,
        color: "#FFFFFF",
        fontSize: 12,
      },
    },
  },
};

const labels = [
  "6 月",
  "7 月",
  "8 月",
  "9 月",
  "10 月",
  "11 月",
  "12 月",
  "1 月",
  "2 月",
];

const CHART_DATA = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: "#FFCC21",
    },
    {
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: "#8FE9D0",
    },
  ],
};

export {
  MEMU_DATA,
  SUB_MENU,
  RECOMMENT_DATA,
  CHALLENGE_DATA,
  NEWS_DATA,
  CHART_OPPTION,
  CHART_DATA,
};
