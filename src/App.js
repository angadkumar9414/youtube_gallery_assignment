import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";

const videos = [
  {
    id: 1,
    title: "Create your own react library and JSX",
    thumbnailUrl:
      "https://i.ytimg.com/vi/yNbnA5pryMg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBB5kQbO4Cf4hXiVMxVeWC-ulak7A",
    likes: 2000,
    views: 23000,
    channelName: "Chai aur Code",
    channelLogoUrl:
      "https://yt3.ggpht.com/1FEdfq3XpKE9UrkT4eOc5wLF2Bz-42sskTi0RkK4nPh4WqCbVmmrDZ5SVEV3WyvPdkfR8sw2=s68-c-k-c0x00ffffff-no-rj",
  },

  {
    id: 2,
    title: "React Tutorial in Hindi for Beginners | Complete React JS Tutorial with Project | 2023 Best Course",
    thumbnailUrl:
      "https://i.ytimg.com/vi/F18Rxw6ftcM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDCwZVg86BrJ1MPkTC6LH6zxGnfKg",
      likes: 10000,
      views: 547000,
      channelName: "Tech Gun",
    channelLogoUrl:
      "https://yt3.googleusercontent.com/ytc/APkrFKavdeLmp-zHCs5UR2rgJ9YvpvJkKpHuxC76CWY_PQ=s176-c-k-c0x00ffffff-no-rj-mo",
  },

  {
    id: 3,
    title: "YAARIYAN 2 (Official Trailer):Divya,Yash,Meezaan,Pearl,Anaswara,Warina,Priya|Radhika,Vinay|Bhushan K",
    thumbnailUrl:
      "https://i4.ytimg.com/vi/XRgVik3IsPU/0.jpg",
    likes: 130000,
    views: 273000,
    channelName: "T-Series",
    channelLogoUrl:
      "https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 4,
    title: "Kalaastar - Teaser | Honey 3.0 | Yo Yo Honey Singh & Sonakshi Sinha | Zee Music Originals",
    thumbnailUrl:
      "https://i.ytimg.com/vi/rOouwTI6yAI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC95zXOuTPi4iaRHjgdhqNYKQ2_Cw",
    likes: 260000,
    views: 25000,
    channelName: "Zee Company",
    channelLogoUrl:
      "https://yt3.ggpht.com/5ozNNrQBUJY8TPt2BYo6fEL-07ilkWHVedWCGFjtvuHU0aYrg1Iop-LJvprodA1_9-MTv7G_YA=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 5,
    title: "Tiger Ka Message | Tiger 3 | Salman Khan, Katrina Kaif | Maneesh Sharma | YRF Spy Universe",
    thumbnailUrl:
      "https://i.ytimg.com/vi/KySsZCy587g/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCpm4q8LcFLDLKErj1sGoFh1fmdxA",
    likes: 20000,
    views: 238000,
    channelName: "YRF",
    channelLogoUrl:
      "https://yt3.ggpht.com/b42QCAmVJ0kzNNi10_HmhsdfPEATQATS80hbLyHVJcVm6drn5pKtC6MY6wTluXi5iZ8_is5Q_Q=s48-c-k-c0x00ffffff-no-rj",
  },
    {
    id: 6,
    title: "Khan Sir पर आया था किस बात का Blame? | The Kapil Sharma Show Season 2 | Full Episode",
    thumbnailUrl:
      "https://i.ytimg.com/vi/JEr6vextmmI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAHEYoWtIFPINB7ZQ5K2nSoUSDstg",
    likes: 26000,
    views: 223000,
    channelName: "Sony LIV",
    channelLogoUrl:
      "https://yt3.ggpht.com/a4AOsw2qHfuXAooYs7EMkwqJMmW_Wbqebpzm8Xmf2Rj_95QMLnAAFDNRNOJG-sSoairOXvQKrS8=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 7,
    title: "Farzi New South Movie Hindi Dubbed 2023 | New South Indian Movies Dubbed In Hindi 2023 Full",
    thumbnailUrl:
      "https://i.ytimg.com/vi/sWT6EzMiTd8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCXKiw2Yc2FKl-mzUO_5pTlXo42YQ",
    likes: 25000,
    views: 798000,
    channelName: "Music Masala",
    channelLogoUrl:
      "https://yt3.ggpht.com/xYhfYw0gJajFNfX-3tjuhRTnM5Ex9CI6JiiU45X35JbqaCNRTfV3KXZp5pvALJMT75YqocWY=s48-c-k-c0x00ffffff-no-nd-rj",
  },
  {
    id: 8,
    title: "How To Practically Choose Your Career? By Sandeep Maheshwari | Hindi",
    thumbnailUrl:
      "https://i.ytimg.com/vi/_xLENSGFZAc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAw1PMHa77eF1ioFAI-0nln28n7Lg",
    likes: 200000,
    views: 631000,
    channelName: "Sandeep Mahesh",
    channelLogoUrl:
      "https://yt3.ggpht.com/W-LbQKXkf3HJsvau1PC8jnOoryI_7AjdGGORmmpWUO4Bdb3Alem-X4fasmV43aRXRydCy3gyAig=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 9,
    title: "BIGG BOSS OR YOUTUBE? The Final Verdict | CARRYMINATI Q&A 2023",
    thumbnailUrl:
      "https://i.ytimg.com/vi/9VdFCP6nC-g/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC2MOxcwR1pqBeKDYj3oqV8IbFmBg",
    likes: 23000,
    views: 233000,
    channelName: "CarryMinati",
    channelLogoUrl:
      "https://yt3.ggpht.com/j01juFvKwHnKHdgcklpPKLkfNBuGbGJKLBwXVhbN_5LeCU3S9bTsHBL-MKPRQCjpZpfPJ_dJ=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 10,
    title: "BB Ki Vines- | Love Ka Hakkar |",
    thumbnailUrl:
      "https://i.ytimg.com/vi/UrIaQbIK2E4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDzBGkcBoO3u4Ju4TaCaZrEeOOcKg",
    likes: 209000,
    views: 203000,
    channelName: "BB Ki Vines",
    channelLogoUrl:
      "https://yt3.ggpht.com/l_ZIXrVEQcHTBTsmpt2CFiWJF9_0hwB3rngr1_lxozZ3Lz58Ij5TcDFOp2TYlioU2gI9RlyExw=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 11
    
    ,
    title: "How to become the Top 1% - Rules & Principles",
    thumbnailUrl:
      "https://i.ytimg.com/vi/stmvSgdVciw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA5JfUwN8xwXcXFSROvrioUZWcupA",
    likes: 22300,
    views: 237000,
    channelName: "Aman Dhattarwal",
    channelLogoUrl:
      "https://yt3.ggpht.com/VlWJZZnCdw63GAZ8SHYJ_3ZdC_e0hWl3IEEPZN08Ps0DitpRDgxziY42DIqdQhkGIba7yn7xd0Y=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 12,
    title: "HPOWER OF CONSISTENCY 🔥 - Powerful Motivation by Alakh Sir",
    thumbnailUrl:
      "https://i.ytimg.com/vi/kP99SW7C3-k/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDeMjSqG8N0SSIMELgYTumWoClL4A",
    likes: 22300,
    views: 237000,
    channelName: "Shorts Motivation",
    channelLogoUrl:
      "https://yt3.ggpht.com/u1V4snNhVXIG3UaPIYduzmaJ4r61FyiQiuINhrvx0wC7tgMaCeA0_7ZB4Meoq7NGXx0V9fOzsA=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 13,
    title: "पगलो जैसी पढ़ाई - 14 Hr Study Motivation ft. Alakh Sir 😠|| IIT JEE NEET Motivation | Physics Wallah",
    thumbnailUrl:
      "https://i.ytimg.com/vi/isxEwg6QAus/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCyolGMl_Io1_6-QO_KJAn6cDSgMw",
    likes: 24300,
    views: 238000,
    channelName: "PW Pupils",
    channelLogoUrl:
      "https://yt3.ggpht.com/IvSlGTRPMLbayIgMTyxYuAY7ND-FYhyCgx-Jgb8bCJGIZSe3EAZEipN8JiBj_BmaclMLJsZieg=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 14,
    title: "Eye Opening Video For Student 😞 | Honest Talk by Alakh Pandey Sir",
    thumbnailUrl:
      "https://i.ytimg.com/vi/AKur3GHzJQA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD-0TugnPdowLl_D3mxjF1GmJh58Q",
    likes: 25300,
    views: 127000,
    channelName: "YAKEEN",
    channelLogoUrl:
      "https://yt3.ggpht.com/ng_hkb0qx31qe6iuJ48RH6nI6pMej-qKHC_WPDfaCnSrZULyHiXVqhASHyvn0dek8GlJ0V1ong=s48-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 15,
    title: "Popular Indian Educator Khan Sir Live at the Entrepreneur's Launchpad #MyLaunchpad",
    thumbnailUrl:
      "https://i.ytimg.com/vi/6Fj5KTcVKP4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBjV-qyKj_dgiA6U0WY-3LV_BwIaQ",
    likes: 24300,
    views: 238000,
    channelName: "Dr. Vivek Bindra",
    channelLogoUrl:
      "https://yt3.ggpht.com/Yy09nKUAprlICWXCB8mzYMpN788eYnwTcxbgG0gOc_yxdINpdUP4iPQK_f5r3xsjN7LIq933WQ=s48-c-k-c0x00ffffff-no-rj",
  },
];

function App() {
  return (
    <div className="App">
      <div className="card-list">
        {videos.map(function (object) {
          return <Card obj={object} />;
        })}
      </div>
    </div>
  );
}

export default App;
