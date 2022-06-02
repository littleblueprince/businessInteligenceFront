import mack from '../../components/mack'
import Vue from "vue";
export default function mackShow(data) {
  console.log('data'+data)
  const Constructor = Vue.extend(mack);
  const Instance = new Constructor();
  Instance.$mount();
  // console.log(str)
  Instance.open(data);
}
