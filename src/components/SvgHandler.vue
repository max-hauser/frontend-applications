<template>

  <!-- 

    Bron van de logica hiervoor: https://www.youtube.com/watch?v=FTwA-ZnQmCQ&t=232s

  -->
<div>

  <svg v-if="name === 'wallet'"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 416 304.85">
    <g id="Laag_2" data-name="Laag 2">
      <g id="Laag_2-2" data-name="Laag 2">
        <g id="creditcard" @click="payment">
          <rect
            class="cls-1"
            x="-1"
            y="45.85"
            width="198"
            height="129"
            rx="20.31"
            transform="translate(-43.71 151.56) rotate(-64.61)"
          />
          <rect
            class="cls-2"
            x="-26.3"
            y="84.84"
            width="198"
            height="27"
            transform="translate(-47.31 121.85) rotate(-64.61)"
          />
          <rect
            class="cls-3"
            x="59.37"
            y="108.14"
            width="95.33"
            height="13"
            transform="translate(-42.43 162.17) rotate(-64.61)"
          />
        </g>
        <g id="pin" @click="payment">
          <rect
            class="cls-4"
            x="49"
            y="45.85"
            width="198"
            height="129"
            rx="20.31"
            transform="translate(-15.15 196.73) rotate(-64.61)"
          />
          <rect
            class="cls-2"
            x="23.7"
            y="84.84"
            width="198"
            height="27"
            transform="translate(-18.76 167.02) rotate(-64.61)"
          />
          <rect
            class="cls-3"
            x="109.37"
            y="108.14"
            width="95.33"
            height="13"
            transform="translate(-13.87 207.34) rotate(-64.61)"
          />
        </g>
        <g id="visa" @click="payment">
          <rect
            class="cls-5"
            x="133"
            y="45.85"
            width="198"
            height="129"
            rx="20.31"
            transform="translate(32.83 272.62) rotate(-64.61)"
          />
          <rect
            class="cls-2"
            x="107.7"
            y="84.84"
            width="198"
            height="27"
            transform="translate(29.22 242.91) rotate(-64.61)"
          />
          <rect
            class="cls-3"
            x="193.37"
            y="108.14"
            width="95.33"
            height="13"
            transform="translate(34.11 283.23) rotate(-64.61)"
          />
        </g>
        <g id="cash" @click="payment">
          <rect
            class="cls-6"
            x="157.03"
            y="91.36"
            width="246.27"
            height="124.21"
            transform="translate(-36.17 197.86) rotate(-36.7)"
          />
          <rect
            class="cls-7"
            x="359.91"
            y="24.06"
            width="21.06"
            height="124.21"
            transform="translate(21.94 238.48) rotate(-36.7)"
          />
          <rect
            class="cls-8"
            x="281.08"
            y="57.19"
            width="89.82"
            height="124.21"
            transform="translate(-6.67 218.48) rotate(-36.7)"
          />
          <rect
            class="cls-9"
            x="224.94"
            y="105.61"
            width="72.2"
            height="124.21"
            transform="matrix(0.8, -0.6, 0.6, 0.8, -48.49, 189.26)"
          />
          <rect
            class="cls-7"
            x="283.92"
            y="129.26"
            width="78.65"
            height="61.89"
            transform="translate(-31.66 224.95) rotate(-36.7)"
          />
          <rect
            class="cls-7"
            x="256.12"
            y="120.29"
            width="87.25"
            height="16.76"
            transform="translate(-17.48 204.66) rotate(-36.7)"
          />
          <path
            class="cls-10"
            d="M328,143.07h0a10.36,10.36,0,0,1,10.36,10.36v36.05a0,0,0,0,1,0,0H317.73a0,0,0,0,1,0,0V153.34A10.27,10.27,0,0,1,328,143.07Z"
            transform="translate(-34.34 229.02) rotate(-36.7)"
          />
          <rect
            class="cls-11"
            x="198.78"
            y="129.44"
            width="51.14"
            height="4.73"
            transform="translate(-34.3 160.22) rotate(-36.7)"
          />
          <rect
            class="cls-12"
            x="176.95"
            y="153.92"
            width="22.78"
            height="15.9"
            transform="translate(-59.41 144.65) rotate(-36.7)"
          />
          <rect
            class="cls-13"
            x="332.2"
            y="38.41"
            width="14.61"
            height="1.72"
            transform="translate(43.84 210.69) rotate(-36.7)"
          />
          <rect
            class="cls-13"
            x="336.05"
            y="42.72"
            width="14.18"
            height="2.15"
            transform="translate(41.86 213.76) rotate(-36.7)"
          />
          <text class="cls-14" transform="translate(269.92 130.93) rotate(-36.7)">100</text>
          <text class="cls-15" transform="translate(216.82 269.68) rotate(-36.7)">100</text>
          <text class="cls-16" transform="translate(161.01 189.07) rotate(-36.7)">100</text>
          <rect
            class="cls-17"
            x="238.21"
            y="224.16"
            width="26.65"
            height="6.88"
            transform="translate(-86.16 195.45) rotate(-36.7)"
          />
          <rect
            class="cls-18"
            x="243.56"
            y="231.27"
            width="27.08"
            height="6.88"
            transform="translate(-89.3 200.19) rotate(-36.7)"
          />
          <polygon
            class="cls-19"
            points="244.09 182.53 249.13 184.31 252.37 180.08 252.23 185.41 257.26 187.19 252.15 188.71 252.01 194.04 248.99 189.65 243.87 191.16 247.12 186.93 244.09 182.53"
          />
          <polygon
            class="cls-19"
            points="266.76 193.33 269.56 197.87 274.74 196.61 271.29 200.68 274.09 205.22 269.15 203.19 265.7 207.26 266.1 201.94 261.17 199.91 266.35 198.65 266.76 193.33"
          />
          <polygon
            class="cls-19"
            points="287.7 195.85 292.31 198.53 296.29 194.97 295.17 200.19 299.78 202.87 294.47 203.41 293.34 208.63 291.19 203.75 285.88 204.28 289.86 200.73 287.7 195.85"
          />
          <line class="cls-20" x1="260.32" y1="133.67" x2="349.36" y2="152.8" />
          <line class="cls-20" x1="253.03" y1="141.52" x2="349.68" y2="161.14" />
          <line class="cls-20" x1="230.5" y1="146.52" x2="350.68" y2="171.11" />
          <line class="cls-20" x1="232.53" y1="155.73" x2="345.93" y2="178.41" />
          <line class="cls-20" x1="238.09" y1="166.06" x2="329.92" y2="184.98" />
        </g>
        <g id="wallet">
          <path
            class="cls-21"
            d="M12,80.85H240.38A16.62,16.62,0,0,1,257,97.47V288.14a16.71,16.71,0,0,1-16.71,16.71H12a0,0,0,0,1,0,0v-224A0,0,0,0,1,12,80.85Z"
          />
          <path
            class="cls-22"
            d="M0,80.85H228.38A16.62,16.62,0,0,1,245,97.47V288.14a16.71,16.71,0,0,1-16.71,16.71H0a0,0,0,0,1,0,0v-224A0,0,0,0,1,0,80.85Z"
          />
          <path
            class="cls-22"
            d="M216.26,293.85H12v-202H216.35A16.62,16.62,0,0,1,233,108.47V277.14A16.71,16.71,0,0,1,216.26,293.85Z"
          />
          <polyline class="cls-23" points="18.03 293.85 12.03 293.85 12.03 287.85" />
          <line class="cls-24" x1="12.03" y1="275.18" x2="12.03" y2="104.18" />
          <polyline class="cls-23" points="12.03 97.85 12.03 91.85 18.03 91.85" />
          <path
            class="cls-25"
            d="M30.14,91.85H216.35A16.62,16.62,0,0,1,233,108.47V277.14a16.71,16.71,0,0,1-16.71,16.71H24.09"
          />
          <path
            class="cls-26"
            d="M172.78,164.85H268a0,0,0,0,1,0,0v56a0,0,0,0,1,0,0H173.74A15.74,15.74,0,0,1,158,205.11V179.63A14.78,14.78,0,0,1,172.78,164.85Z"
          />
          <path
            class="cls-27"
            d="M202,192.85a15.26,15.26,0,0,0-15.5-15c-8.56,0-15.5,5.72-15.5,14s6.94,16,15.5,16A15.26,15.26,0,0,0,202,192.85Z"
          />
          <path
            class="cls-28"
            d="M203.5,194.35a15.26,15.26,0,0,0-15.5-15c-8.56,0-15.5,5.72-15.5,14s6.94,16,15.5,16A15.26,15.26,0,0,0,203.5,194.35Z"
          />
          <circle class="cls-29" cx="187" cy="192.85" r="15" />
        </g>
      </g>
    </g>
  </svg>


<svg xmlns="http://www.w3.org/2000/svg" v-if="name === 'supercar'" data-carheight="130" viewBox="0 0 166.5 42.22" class="car"><g id="Laag_2" data-name="Laag 2"><g id="Laag_2-2" data-name="Laag 2"><path class="cls-1-supercar" d="M111.5,14.22s-38-32-109,0c0,0-3.5.5.5,4.5s-3,11-3,12,4,10,14,6c0,0-3-22,16-22s16,24,16,24h72s0-24,17-24,16.5,22.5,16.5,22.5,15-1,15-11S132.5,8.22,111.5,14.22ZM61,15.72c-1,1-18-5-16-8s5-5,12-5C57,2.72,62,14.72,61,15.72Zm33-3v4H66s-8-14-6-14,35,1,38,10Z"/><circle class="cls-1-supercar" cx="135.5" cy="30.22" r="12"/><circle class="cls-1-supercar" cx="29.5" cy="30.22" r="12"/></g></g></svg>

<svg xmlns="http://www.w3.org/2000/svg" v-if="name === 'sedan'" viewBox="0 0 164.52 53.5" data-carheight="150" class="car"> <g id="Laag_2" data-name="Laag 2"><g id="Laag_2-2" data-name="Laag 2"><path class="cls-1" d="M163.19,33c-3-4-2-9-10-11s-34-5-35-6-28-16-31-16h-37s-23,8-28,12-19,5-19,6V33s-3,0-3,1-3,14,15,12c0,0-2-21,17-22s16,23,16,23l74,1s-4-24,16-24,17,22,17,22h8S166.19,37,163.19,33Zm-128-15s-3-4-1-6,9-5,9-5l1,11Zm11,0-1-13s4-3,22-3l2,16Zm56-3v5l-29-1-2-17h14s21,10,22,13Z"/><circle class="cls-1" cx="31.69" cy="41.5" r="12"/><circle class="cls-1" cx="138.69" cy="41.5" r="12"/></g></g></svg>

<svg xmlns="http://www.w3.org/2000/svg" v-if="name === 'suv'" viewBox="0 0 153 59.5" data-carheight="180" class="car"><g id="Laag_2" data-name="Laag 2"><g id="Laag_2-2" data-name="Laag 2"><path class="cls-1" d="M151,34s0-7-1-11-38-4-40-6S92,0,92,0H13C9,0,3,29,3,32a2.94,2.94,0,0,1-3,3V48H6S5,30,22,30,40,48,40,48h69s1-18,17-18,16,17,17,18,10,0,10,0V34C153,33,151,34,151,34ZM31,20H9L15,4H37Zm10,0L43,4H65l3,16Zm57-5v5H73L69,4H93l1,1,10,10Z"/><circle class="cls-1" cx="22.5" cy="47.5" r="12"/><circle class="cls-1" cx="125.5" cy="47.5" r="12"/></g></g></svg>

<svg xmlns="http://www.w3.org/2000/svg" v-if="name === 'van'" viewBox="0 0 165.41 68.5"  data-carheight="220" class="car"><g id="Laag_2" data-name="Laag 2"><g id="Laag_2-2" data-name="Laag 2"><path class="cls-1" d="M.41,49c1-2,1-1,1-2V1s0-1,5-1h111s13,4,19,22c0,0,26,6,26,9V47h3s-1,12-2,13-8,2-8,1,2-20-15-20-16,19-16,22h-78s3-23-15-23-17,13-17,20c0,0-12,0-13-1S-.59,51,.41,49Zm104-25c1,2,23,1,23,1V21c0-1,4,1,5,0s-12-16-13-17-16,0-17,0S103.41,22,104.41,24Z"/><circle class="cls-1" cx="139.91" cy="56.5" r="12"/><circle class="cls-1" cx="30.91" cy="56.5" r="12"/></g></g></svg>
</div>
</template>

<script>
export default {
  name: "SvgHandler",
  props: ["name"],
  methods: {
    payment: function(event) {
      document.querySelector('p').style.color = "white";
      document.querySelector('p').innerHTML = event.target.parentNode.id;
      const groups = document.querySelectorAll('g');

      groups.forEach((g)=>{
        g.classList.remove('selected');
      });

      const parent = event.target.closest('g');
      parent.classList.add('selected');
    }    
  }
};
</script>

<style scoped>
svg {
  max-width: 30vw;
  margin-top: 10vh;
}

.selected{
  stroke: white;
  stroke-width: 4px;
}

g#pin:hover,
g#creditcard:hover,
g#cash:hover,
g#visa:hover{
    stroke-width: 4px;
    stroke: white;
    margin-top: -100px;
    transform: translate(20,2.5);
    cursor: pointer;
}

  .cls-1 {
    fill: #37393a;
  }
  .cls-2 {
    fill: #375565;
  }
  .cls-3 {
    fill: #fff;
  }
  .cls-4 {
    fill: #d8561d;
  }
  .cls-5 {
    fill: #1e4fd6;
  }
  .cls-6 {
    fill: #f8fcf6;
  }
  .cls-7 {
    fill: #9dd39a;
  }
  .cls-8 {
    fill: #80b87f;
  }
  .cls-9 {
    fill: #cfefcb;
  }
  .cls-10 {
    fill: #81b980;
  }
  .cls-11 {
    fill: #81b97e;
  }
  .cls-12 {
    fill: #2f199e;
  }
  .cls-13 {
    fill: #549454;
  }
  .cls-14 {
    font-size: 52.43px;
  }
  .cls-14,
  .cls-15,
  .cls-16 {
    fill: #009245;
    font-family: MyriadPro-Regular, Myriad Pro;
  }
  .cls-15 {
    font-size: 24.5px;
  }
  .cls-16 {
    font-size: 15.9px;
  }
  .cls-17 {
    fill: #80b97c;
  }
  .cls-18 {
    fill: #6e9a6c;
  }
  .cls-19 {
    fill: #f5ca00;
  }
  .cls-20,
  .cls-23,
  .cls-24,
  .cls-25 {
    fill: none;
    stroke-miterlimit: 10;
  }
  .cls-20 {
    stroke: #f2f2f2;
    stroke-linecap: round;
    stroke-width: 3px;
    opacity: 0.28;
  }
  .cls-21 {
    fill: #3d372d;
  }
  .cls-22 {
    fill: #8a461f;
  }
  .cls-23,
  .cls-24,
  .cls-25 {
    stroke: #42210b;
    stroke-width: 4px;
  }
  .cls-24 {
    stroke-dasharray: 12.67 12.67;
  }
  .cls-25 {
    stroke-dasharray: 12.11 12.11;
  }
  .cls-26 {
    fill: #733216;
  }
  .cls-27 {
    fill: #f9d99b;
  }
  .cls-28 {
    fill: #431408;
  }
  .cls-29 {
    fill: #efab45;
  }

.cls-1-supercar{fill:#a8a8a8;}  

.car{
  width: 160px;
}

.car path, .car circle{
  fill: #a8a8a8;
  transition: fill 0.5s;
}

.car.clicked path, .car.clicked circle{
  fill: orange;
  stroke: #fffff0;
}

.car:hover circle,
.car:hover path{
  cursor: pointer;
  fill: orange;
}
</style>
