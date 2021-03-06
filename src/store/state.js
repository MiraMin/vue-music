import {playMode} from 'common/js/config'
import {loadSearch, loadPlay, loadFavorite} from 'common/js/cache'


const state = {
  singer: {},
  playing:false, // 播放
  fullScreen:false, // 全屏播放
  playlist:[], 
  sequenceList:[],
  mode: playMode.sequence, // 播放模式
  currentIndex:-1,
  disc: {},
  topList: {},
  searchHistory: loadSearch(),
  playHistory: loadPlay(),
  favoriteList: loadFavorite()  
}

export default state