<template>
  <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
</template>

<script>
  import MusicList from 'components/music-list/music-list'
  import {mapGetters} from 'vuex'
  import {getSingerDetail} from 'api/singer'
  import {ERR_OK} from 'api/config'
  import {createSong} from 'common/js/song'

  export default{
    data(){
      return{
        songs:[]
      }
    },
    computed:{
      title(){
        return this.singer.name
      },
      bgImage(){
        return this.singer.avatar
      },
      ...mapGetters([
        'singer' // state获取
      ])
    },
    created(){
      this._getDetail()
    },
    methods:{
      _getDetail(){
        if(!this.singer.id){ // 若无id则跳转到列表页
          this.$router.push('/singer')
          return
        }
        getSingerDetail(this.singer.id).then((res) =>{
          if(res.code === ERR_OK){
            this.songs = this._normalizeSinger(res.data.list)
          }
        })
      },
      _normalizeSinger(list){
        let ret = []
        list.forEach((item) => {
          let {musicData} = item
          if (musicData.songid && musicData.albummid) {
            ret.push(createSong(musicData))
          }
        })
        return ret        
      }
    },
    components:{
      MusicList
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
.singer-detail
  position:fixed
  z-index:100
  top:0
  left:0
  right:0
  bottom:0
  background: $color-background

  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>