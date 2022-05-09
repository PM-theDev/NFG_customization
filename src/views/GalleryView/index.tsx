import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import axios from "axios";

import { useWalletNfts, NftTokenAccount } from "@nfteyez/sol-rayz-react";
import { useConnection } from "@solana/wallet-adapter-react";


import { Loader, SolanaLogo, SelectAndConnectWalletButton } from "components";
import styles from "./index.module.css";
import React from "react";

const walletPublicKey = "";
const uri = ""
const fetchNftMeta = (uri: string) => {
  return axios
    .get(`${uri}`)
    .then(({ data }) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
};

var nftAttribute = [];
var Background: any = [];
var Wall: any = [];
var BigFurniture: any = [];
var Car: any = [];
var Neon: any = [];
var Wheels: any = [];
var Spoiler: any = [];
var Floor: any = [];
var Hoist: any = [];
var LeftPoster: any = [];
var RightQuote: any = [];
var SmallFurniture_1: any = [];
var SmallFurniture_2: any = [];
var SmallFurniture_3: any = [];



export const GalleryView: FC = ({ }) => {
  const { connection } = useConnection();
  const [walletToParsePublicKey, setWalletToParsePublicKey] =
    useState<string>(walletPublicKey);
  const { publicKey } = useWallet();

  const { nfts, isLoading, error } = useWalletNfts({
    publicAddress: walletToParsePublicKey,
    connection,
  });

  const [BackgroundDetail, setBackgroundDetail] = useState('bg_doorrolleropenview');
  const [WallDetail, setWallDetail] = useState('wall_containerblack');
  const [BigFurnitureDetail, setBigFurnitureDetail] = useState('bigfur_mix1');
  const [CarDetail, setCarDetail] = useState('car_set1_supraa80_white');
  const [NeonDetail, setNeonDetail] = useState('neon_any_any');
  const [WheelsDetail, setWheelsDetail] = useState('wheel_set1_any_watanabe5spot');
  const [SpoilerDetail, setSpoilerDetail] = useState('spoiler_supraa80_white_trd');
  const [FloorDetail, setFloorDetail] = useState('floor_cement');
  const [HoistDetail, setHoistDetail] = useState('hoist_none');
  const [LeftPosterDetail, setLeftPosterDetail] = useState('poster_left_none');
  const [RightQuoteDetail, setRightQuoteDetail] = useState('rightquote_none');
  const [SmallFurniture_1Detail, setSmallFurniture_1Detail] = useState('smallfurniture_1_modelcar1');
  const [SmallFurniture_2Detail, setSmallFurniture_2Detail] = useState('smallfur2_seats_recarosp3_yellow');
  const [SmallFurniture_3Detail, setSmallFurniture_3Detail] = useState('smallfurniture_3_floor_jack1');

  const [BackgroundState, setBackgroundState] = useState(0);
  const [WallState, setWallState] = useState(0);
  const [BigFurnitureState, setBigFurnitureState] = useState(0);
  const [CarState, setCarState] = useState(0);
  const [NeonState, setNeonState] = useState(0);
  const [WheelsState, setWheelsState] = useState(0);
  const [SpoilerState, setSpoilerState] = useState(0);
  const [FloorState, setFloorState] = useState(0);
  const [HoistState, setHoistState] = useState(0);
  const [LeftPosterState, setLeftPosterState] = useState(0);
  const [RightQuoteState, setRightQuoteState] = useState(0);
  const [SmallFurniture_1State, setSmallFurniture_1State] = useState(0);
  const [SmallFurniture_2State, setSmallFurniture_2State] = useState(0);
  const [SmallFurniture_3State, setSmallFurniture_3State] = useState(0);
  const [DotDetail, setDotDetail] = useState('Reddot');



  function onUseWalletClick() {

    if (publicKey) {
      setWalletToParsePublicKey(publicKey?.toBase58());
    }

    {
      nfts?.map((nft: any, index: number) => (
        fetchNftMeta(nft.data.uri).then((nftMeta) => {
          if (nft.data.name.substring(0, 3) == "NFG") {
            nftAttribute = nftMeta.attributes
            console.log(nftMeta.name, nftAttribute);
            let i = 0
            for (i = 0; i < nftAttribute.length; i++) {
              // console.log(nftAttribute[i].trait_type,nftAttribute[i].value)
              if (nftAttribute[i].trait_type === "Background")
                Background.push(nftAttribute[i].value);
              if (nftAttribute[i].trait_type === "Wall")
                Wall.push(nftAttribute[i].value);
              if (nftAttribute[i].trait_type === "BigFurniture")
                BigFurniture.push(nftAttribute[i].value);
              if (nftAttribute[i].trait_type === "Car")
                Car.push(nftAttribute[i].value);
              if (nftAttribute[i].trait_type === "Neon")
                Neon.push(nftAttribute[i].value);
              if (nftAttribute[i].trait_type === "Wheels")
                Wheels.push(nftAttribute[i].value);
              if (nftAttribute[i].trait_type === "Spoiler")
                Spoiler.push(nftAttribute[i].value);
              if (nftAttribute[i].trait_type === "Floor")
                Floor.push(nftAttribute[i].value);
              if (nftAttribute[i].trait_type === "Hoist")
                Hoist.push(nftAttribute[i].value);
              if (nftAttribute[i].trait_type === "LeftPoster")
                LeftPoster.push(nftAttribute[i].value);
              if (nftAttribute[i].trait_type === "RightQuote")
                RightQuote.push(nftAttribute[i].value);
              if (nftAttribute[i].trait_type === "SmallFurniture_1")
                SmallFurniture_1.push(nftAttribute[i].value);
              if (nftAttribute[i].trait_type === "SmallFurniture_2")
                SmallFurniture_2.push(nftAttribute[i].value);
              if (nftAttribute[i].trait_type === "SmallFurniture_3")
                SmallFurniture_3.push(nftAttribute[i].value);
            }
          }
        })
      )
      )
    }

    Background = Array.from(new Set(Background));
    Wall = Array.from(new Set(Wall));
    BigFurniture = Array.from(new Set(BigFurniture));
    Car = Array.from(Car);
    Neon = Array.from(Neon);
    Wheels = Array.from(Wheels);
    Spoiler = Array.from(Spoiler);
    Floor = Array.from(new Set(Floor));
    Hoist = Array.from(new Set(Hoist));
    LeftPoster = Array.from(new Set(LeftPoster));
    RightQuote = Array.from(new Set(RightQuote));
    SmallFurniture_1 = Array.from(new Set(SmallFurniture_1));
    SmallFurniture_2 = Array.from(new Set(SmallFurniture_2));
    SmallFurniture_3 = Array.from(new Set(SmallFurniture_3));

    if (Car.length > 0){
      setDotDetail("Greendot")
    }

    setBackgroundDetail(Background[BackgroundState].replace(".jpg", "").replace(".png", "").replace(" ", "").toLowerCase())
    setWallDetail(Wall[WallState].replace(".jpg", "").replace(".png", "").replace(" ", "").toLowerCase())
    setBigFurnitureDetail(BigFurniture[BigFurnitureState].replace(".jpg", "").replace(".png", "").replace(" ", "").toLowerCase())
    setCarDetail(Car[CarState].replace(".jpg", "").replace(".png", "").replace(" ", "").toLowerCase())
    setNeonDetail(Neon[NeonState].replace(".jpg", "").replace(".png", "").replace(" ", "").toLowerCase())
    setWheelsDetail(Wheels[WheelsState].replace(".jpg", "").replace(".png", "").replace(" ", "").toLowerCase())
    setFloorDetail(Floor[FloorState].replace(".jpg", "").replace(".png", "").replace(" ", "").toLowerCase())
    setSpoilerDetail(Floor[SpoilerState].replace(".jpg", "").replace(".png", "").replace(" ", "").toLowerCase())
    setHoistDetail(Hoist[HoistState].replace(".jpg", "").replace(".png", "").replace(" ", "").toLowerCase())
    setLeftPosterDetail(LeftPoster[LeftPosterState].replace(".jpg", "").replace(".png", "").replace(" ", "").toLowerCase())
    setRightQuoteDetail(RightQuote[RightQuote].replace(".jpg", "").replace(".png", "").replace(" ", "").toLowerCase())
    setSmallFurniture_1Detail(SmallFurniture_1[SmallFurniture_1].replace(".jpg", "").replace(".png", "").replace(" ", "").toLowerCase())
    setSmallFurniture_2Detail(SmallFurniture_2[SmallFurniture_2].replace(".jpg", "").replace(".png", "").replace(" ", "").toLowerCase())
    setSmallFurniture_3Detail(SmallFurniture_3[SmallFurniture_3].replace(".jpg", "").replace(".png", "").replace(" ", "").toLowerCase())

    return { Background, Wall, BigFurniture, Car, Neon, Wheels, Floor, Hoist, LeftPoster, RightQuote, SmallFurniture_1, SmallFurniture_2, SmallFurniture_3 };
  }

  Background = Array.from(new Set(Background));
  Wall = Array.from(new Set(Wall));
  BigFurniture = Array.from(new Set(BigFurniture));
  Car = Array.from(Car);
  Neon = Array.from(Neon);
  Wheels = Array.from(Wheels);
  Spoiler = Array.from(Spoiler);
  Floor = Array.from(new Set(Floor));
  Hoist = Array.from(new Set(Hoist));
  LeftPoster = Array.from(new Set(LeftPoster));
  RightQuote = Array.from(new Set(RightQuote));
  SmallFurniture_1 = Array.from(new Set(SmallFurniture_1));
  SmallFurniture_2 = Array.from(new Set(SmallFurniture_2));
  SmallFurniture_3 = Array.from(new Set(SmallFurniture_3));




  function nextBackground(Background: any, BackgroundState: number) {
    let next_num = BackgroundState + 1
    // if next_num exceeds total, restart (set current to 0)
    let new_current = next_num < Background.length ? next_num : 0
    setBackgroundState(new_current)
    setBackgroundDetail(Background[BackgroundState].replace(".jpg", "").replace(".png", "").replace(" ", "").toLowerCase())
  }

  function nextWall(Wall: any, WallState: number) {
    let next_num = WallState + 1
    // if next_num exceeds total, restart (set current to 0)
    let new_current = next_num < Wall.length ? next_num : 0
    setWallState(new_current)
    setWallDetail(Wall[WallState].replace(".jpg", "").replace(".png", "").replace(" ", "").toLowerCase())
  }

  function nextBigFurniture(BigFurniture: any, BigFurnitureState: number) {
    let next_num = BigFurnitureState + 1
    // if next_num exceeds total, restart (set current to 0)
    let new_current = next_num < BigFurniture.length ? next_num : 0
    setBigFurnitureState(new_current)
    setBigFurnitureDetail(BigFurniture[BigFurnitureState].replace(".jpg", "").replace(".png", "").replace(" ", "").toLowerCase())
  }

  function nextCar(Car: any, CarState: number, Neon: any, NeonState: number, Wheels: any, WheelsState: number, Spoiler: any, SpoilerState: number) {
    let next_num = CarState + 1
    // if next_num exceeds total, restart (set current to 0)
    let new_current = next_num < Car.length ? next_num : 0
    setCarState(new_current)
    setCarDetail(Car[CarState].replace(".jpg", "").replace(".png", "").replace(" ", "").toLowerCase().toLowerCase())
    setNeonState(new_current)
    setNeonDetail(Neon[NeonState].replace(".jpg", "").replace(".png", "").replace(" ", "").toLowerCase())
    setWheelsState(new_current)
    setWheelsDetail(Wheels[WheelsState].replace(".jpg", "").replace(".png", "").replace(" ", "").toLowerCase())
    setSpoilerState(new_current)
    setSpoilerDetail(Spoiler[SpoilerState].replace(".jpg", "").replace(".png", "").replace(" ", "").toLowerCase())
  }


  function nextFloor(Floor: any, FloorState: number) {
    let next_num = FloorState + 1
    // if next_num exceeds total, restart (set current to 0)
    let new_current = next_num < Floor.length ? next_num : 0
    setFloorState(new_current)
    setFloorDetail(Floor[FloorState].replace(".jpg", "").replace(".png", "").replace(" ", "").toLowerCase())
  }

  function nextHoist(Hoist: any, HoistState: number) {
    let next_num = HoistState + 1
    // if next_num exceeds total, restart (set current to 0)
    let new_current = next_num < Hoist.length ? next_num : 0
    setHoistState(new_current)
    setHoistDetail(Hoist[HoistState].replace(".jpg", "").replace(".png", "").replace(" ", "").toLowerCase())
  }

  function nextLeftPoster(LeftPoster: any, LeftPosterState: number) {
    let next_num = LeftPosterState + 1
    // if next_num exceeds total, restart (set current to 0)
    let new_current = next_num < LeftPoster.length ? next_num : 0
    setLeftPosterState(new_current)
    setLeftPosterDetail(LeftPoster[LeftPosterState].replace(".jpg", "").replace(".png", "").replace(" ", "").toLowerCase())
  }


  function nextRightQuote(RightQuote: any, RightQuoteState: number) {
    let next_num = RightQuoteState + 1
    // if next_num exceeds total, restart (set current to 0)
    let new_current = next_num < RightQuote.length ? next_num : 0
    setRightQuoteState(new_current)
    setRightQuoteDetail(RightQuote[RightQuoteState].replace(".jpg", "").replace(".png", "").replace(" ", "").toLowerCase())
  }

  function nextSmallFurniture_1(SmallFurniture_1: any, SmallFurniture_1State: number) {
    let next_num = SmallFurniture_1State + 1
    // if next_num exceeds total, restart (set current to 0)
    let new_current = next_num < SmallFurniture_1.length ? next_num : 0
    setSmallFurniture_1State(new_current)
    setSmallFurniture_1Detail(SmallFurniture_1[SmallFurniture_1State].replace(".jpg", "").replace(".png", "").replace(" ", "").toLowerCase())
  }

  function nextSmallFurniture_2(SmallFurniture_2: any, SmallFurniture_2State: number) {
    let next_num = SmallFurniture_2State + 1
    // if next_num exceeds total, restart (set current to 0)
    let new_current = next_num < SmallFurniture_2.length ? next_num : 0
    setSmallFurniture_2State(new_current)
    setSmallFurniture_2Detail(SmallFurniture_2[SmallFurniture_2State].replace(".jpg", "").replace(".png", "").replace(" ", "").toLowerCase())
  }

  function nextSmallFurniture_3(SmallFurniture_3: any, SmallFurniture_3State: number) {
    let next_num = SmallFurniture_3State + 1
    // if next_num exceeds total, restart (set current to 0)
    let new_current = next_num < SmallFurniture_3.length ? next_num : 0
    setSmallFurniture_3State(new_current)
    setSmallFurniture_3Detail(SmallFurniture_3[SmallFurniture_3State].replace(".jpg", "").replace(".png", "").replace(" ", "").toLowerCase())
  }


  return (
    <div>
      <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
        <div className={styles.container}>
          <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
            <div className="flex-none">
              <button className="btn btn-square btn-ghost">
              </button>
            </div>
            <div className="flex-1 px-2 mx-2">
              <div className="text-sm breadcrumbs">
                <ul className="text-xl">
                  <li>
                    <Link href="https://nonfungiblegarage.com">
                      <a>NFG</a>
                    </Link>
                  </li>
                  <li>
                    <span className="opacity-40">Garage Customization</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-none">
              <WalletMultiButton className="btn btn-ghost" />
            </div>
          </div>

          <div className="text-center pt-2">
            <div className="hero min-h-16 p-0 pt-10">
              <div className="text-center hero-content w-full">
                <div className="w-full">
                <div id="dot" className={DotDetail}></div>
                  <h1 className="mb-5 text-5xl">
                    Customize your Garage <SolanaLogo />
                  </h1>

                  <div className="w-full min-w-full">
                    <p className="mb-5">
                      Here we come! Connect your wallet and customize your desired garage!
                    </p>
                    <div>
                      <div className="form-control mt-8">
                        <label className="input-group input-group-vertical input-group-lg">
                          <span>Current wallets</span>
                          <div className="flex space-x-2">
                            <input
                              placeholder='Connect your wallet and Press "Use Wallet Address"'
                              className="w-full input input-bordered input-lg"
                              value={walletToParsePublicKey}
                              style={{
                                borderRadius:
                                  "0 0 var(--rounded-btn,.5rem) var(--rounded-btn,.5rem)",
                              }}
                            />

                            <SelectAndConnectWalletButton
                              onUseWalletClick={onUseWalletClick}
                            />
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="container_customize">
        <div id="background_customize">
          <div id="Wall" className={WallDetail}></div>
          <div id="Background" className={BackgroundDetail}></div>
          <div id="Floor" className={FloorDetail}></div>
          <div id="Hoist" className={HoistDetail}></div>
          <div id="LeftPoster" className={LeftPosterDetail}></div>
          <div id="RightQuote" className={RightQuoteDetail}></div>
          <div id="BigFurniture" className={BigFurnitureDetail}></div>
          <div id="SmallFurniture_1" className={SmallFurniture_1Detail}></div>
          <div id="SmallFurniture_2" className={SmallFurniture_2Detail}></div>
          <div id="SmallFurniture_3" className={SmallFurniture_3Detail}></div>
          <div id="Car" className={CarDetail}></div>
          <div id="Wheels" className={WheelsDetail}></div>
          <div id="Neon" className={NeonDetail}></div>
          <div id="Spoiler" className={SpoilerDetail}></div>
        </div>
      </div>
      <button id="nextWall" disabled={Wall.length === 1} onClick={() => nextWall(Wall, WallState)}>Next Wall</button>
      <button id="nextBackground" disabled={Background.length === 1} onClick={() => nextBackground(Background, BackgroundState)}>Next Background</button>
      <button id="nextFloor" disabled={Floor.length === 1} onClick={() => nextFloor(Floor, FloorState)}>Next Floor</button>
      <button id="nextHoist" disabled={Hoist.length === 1} onClick={() => nextHoist(Hoist, HoistState)}>Next Hoist</button>
      <button id="nextLeftPoster" disabled={LeftPoster.length === 1} onClick={() => nextLeftPoster(LeftPoster, LeftPosterState)}>Next LeftPoster</button>
      <button id="nextRightQuote" disabled={RightQuote.length === 1} onClick={() => nextRightQuote(RightQuote, RightQuoteState)}>Next RightQuote</button>
      <button id="nextBigFurniture" disabled={BigFurniture.length === 1} onClick={() => nextBigFurniture(BigFurniture, BigFurnitureState)}>Next BigFurniture</button>
      <button id="nextSmallFurniture_1" disabled={SmallFurniture_1.length === 1} onClick={() => nextSmallFurniture_1(SmallFurniture_1, SmallFurniture_1State)}>Next SmallFurniture_1</button>
      <button id="nextSmallFurniture_2" disabled={SmallFurniture_2.length === 1} onClick={() => nextSmallFurniture_2(SmallFurniture_2, SmallFurniture_2State)}>Next SmallFurniture_2</button>
      <button id="nextSmallFurniture_3" disabled={SmallFurniture_3.length === 1} onClick={() => nextSmallFurniture_3(SmallFurniture_3, SmallFurniture_3State)}>Next SmallFurniture_3</button>
      <button id="nextCar" disabled={Car.length === 1} onClick={() => nextCar(Car, CarState, Neon, NeonState, Wheels, WheelsState, Spoiler, SpoilerState)}>Next Car</button>
      <button id="mintnew" disabled={true}>Mint this as NFT <br></br>(Coming soon)</button>
    </div>

  );
};
