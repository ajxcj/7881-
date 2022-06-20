<template>
  <div id="estimate">
    <div class="header">
      <van-icon @click="to('index')" name="arrow-left" size="4.8rem" />
      <span>7881账号估价</span>
      <p @click="to('login')">我的估价</p>
    </div>
    <div class="center">
      <img src="https://h5.7881.com/static/img/header-main-title.62a7b69e.png" alt />
      <img src="https://h5.7881.com/static/img/header-subtitle.2ab3734e.png" alt />
      <img src="https://h5.7881.com/static/img/header-person.c45aae58.png" alt />
    </div>
    <div class="account">
      <img src="https://h5.7881.com/static/img/content-main-title.82e00188.png" alt />
      <span>更多游戏推荐敬请期待</span>

      <div class="jia">
        <div class="panel-game-item" v-for="(item,index) in key" :key="index">
          <img
            :src="'https://h5.7881.com/static/images/evaluation/content-person-'+arr[index]+'.png'"
            alt
          />
          <span>{{item.alias}}</span>
          <p>实时快速估价</p>
          <div>免费在线估价</div>
        </div>
      </div>
      <div class="body-flow-container">
        <div>
          <div class="top">
            <img src="https://h5.7881.com/static/img/flow-title.a30b31f3.png" alt />
          </div>
          <div class="bottom">
            <div class="flow-item">
              <img src="https://h5.7881.com/static/img/flow-item1.5365cb09.png" alt />
              <span>商品信息</span>
            </div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAsCAYAAAAtv0UIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTI4QTZENzc5QjMyMTFFQjhFMzQ4NTA4M0M3NTFGRTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTI4QTZENzg5QjMyMTFFQjhFMzQ4NTA4M0M3NTFGRTYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMjhBNkQ3NTlCMzIxMUVCOEUzNDg1MDgzQzc1MUZFNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMjhBNkQ3NjlCMzIxMUVCOEUzNDg1MDgzQzc1MUZFNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmv10xwAAAQwSURBVHja7Fo7aBVBFN277z0i2KmVFkqw9IMgCILWIqKgYKGIWliICCZWVmos1EaxML1/LFSIInZ+EEQIaKFlAgYtAipooU3i9SzZhXG8d+ZOkhfYlx047O7s7JudM/f/lsbGxrIatxZwHHgBfJjND/T395vH5lm92zSwGbgEbOz2ZHUnq2gT5fEysLshy76Gk8Cphiy9UXnk8rinlLKlDVlyY+96K3ADWNOQpUsXOX2rgFvAtoasf6WKBQkrzvuAa8CRhqz/JUvrHwDONmTNEMKKSrJzvh+4B6xY7JIlGXsWPOUm4CGwbrGSNR1QQ0lNVwKPgX2pE7UT9N9iG0LjaBbPxa7/AB1HikhRTxb6rgKrgStmfUcinZcSRuUxLxPU3LtuCeftEi0PVb87xu3rOM91vGfcvo73jD+OShvU5/S74/zx7jtV7/oEOIGEeiqVrJZAmDuJT4h/7i9IW7wP6b523laIaSuEtgQCfcI+AgdA2GTMZrEhyGODapBibEmJg0K/R5EInQQjTsrcFHi+auuBV+Pj49tjZJE3qTRhrM8PDqWFpBhh387EyJPm18jVNqxQ5xEQdigmWRTZwczwshQZxwbC3AVRwpyx99Q0Q+ofBmEXYpJlWXDI02QBdWKjx0zN/yRyKaKCFuIGQdgjoCPFWaS4V2vEnLLwGMkW9ZZUVYreJa2hyG9U1zuANyBsrU8WK1LAAWNPgQnnol6p5LvEsFHSKbAB7twbgHcgbKcfwWtssyB5lKCOmqFOtYesSBInBMba/ZA2LSliMRB2Jg9EvyFDzQaP5e8oB0hkowRRJP+jgDfOEtXf/Y3fwGRbEGMtVom5ec22sEGSLJ4vtUxDgU0O2Tt/7vfAXgSsE7lROkLBn7Z7FvsQsxmhGIoEM8GKarqbTooUSu81AmwpiKoSaWu4INmOmCtmxT6EDDpHVNCSlFPE04UcU3V+ESQN+VUHjtgbNkS/mbKDFCj7ZsZURLN3sVAg5nBCpuEYiLorlWgokh5Y8zYORO2WCJuNNo2MsSEFPLJ27wtwGESNavUsFoqAIeMnvTwlqJOmYmTIPWMmImb8Q+HRaFl5+Boq/lncKhulgg3SaV0gG9KcVLXT7NRtkDRoqZRWi512Euu8rEJOeUVAt0jYEu61AsfYvdB1LtTUqjmLD0OWJaRnfhsCUcPWsnJFVOYc69TOAcsTMoGKvCLQHABRT+dSg69bayemOQVRn4GjQNLHab32VxgZPPdrYFcqUb1CFhkD5qLdKSXq53yIcB0bG1KoohWfId2cT32vs2Rp8dkv4DTwdq4T9cpXNFoZ6BNwcD6I6iWbJQWeL4uIvCSsK263zpLlRub3gevdjlHqLFmVvSo+8362EAFdXSUrK8OB89nMX/FZQ5bcii9hvgFFIvx9IVOFurUioX4APAd+dHuyvwIMAJx0V0C7qw7DAAAAAElFTkSuQmCC"
              alt
            />
            <div class="flow-item">
              <img src="https://h5.7881.com/static/img/flow-item2.0eed16c7.png" alt />
              <span>账号估价</span>
            </div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAsCAYAAAAtv0UIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTI4QTZENzc5QjMyMTFFQjhFMzQ4NTA4M0M3NTFGRTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTI4QTZENzg5QjMyMTFFQjhFMzQ4NTA4M0M3NTFGRTYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMjhBNkQ3NTlCMzIxMUVCOEUzNDg1MDgzQzc1MUZFNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMjhBNkQ3NjlCMzIxMUVCOEUzNDg1MDgzQzc1MUZFNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmv10xwAAAQwSURBVHja7Fo7aBVBFN277z0i2KmVFkqw9IMgCILWIqKgYKGIWliICCZWVmos1EaxML1/LFSIInZ+EEQIaKFlAgYtAipooU3i9SzZhXG8d+ZOkhfYlx047O7s7JudM/f/lsbGxrIatxZwHHgBfJjND/T395vH5lm92zSwGbgEbOz2ZHUnq2gT5fEysLshy76Gk8Cphiy9UXnk8rinlLKlDVlyY+96K3ADWNOQpUsXOX2rgFvAtoasf6WKBQkrzvuAa8CRhqz/JUvrHwDONmTNEMKKSrJzvh+4B6xY7JIlGXsWPOUm4CGwbrGSNR1QQ0lNVwKPgX2pE7UT9N9iG0LjaBbPxa7/AB1HikhRTxb6rgKrgStmfUcinZcSRuUxLxPU3LtuCeftEi0PVb87xu3rOM91vGfcvo73jD+OShvU5/S74/zx7jtV7/oEOIGEeiqVrJZAmDuJT4h/7i9IW7wP6b523laIaSuEtgQCfcI+AgdA2GTMZrEhyGODapBibEmJg0K/R5EInQQjTsrcFHi+auuBV+Pj49tjZJE3qTRhrM8PDqWFpBhh387EyJPm18jVNqxQ5xEQdigmWRTZwczwshQZxwbC3AVRwpyx99Q0Q+ofBmEXYpJlWXDI02QBdWKjx0zN/yRyKaKCFuIGQdgjoCPFWaS4V2vEnLLwGMkW9ZZUVYreJa2hyG9U1zuANyBsrU8WK1LAAWNPgQnnol6p5LvEsFHSKbAB7twbgHcgbKcfwWtssyB5lKCOmqFOtYesSBInBMba/ZA2LSliMRB2Jg9EvyFDzQaP5e8oB0hkowRRJP+jgDfOEtXf/Y3fwGRbEGMtVom5ec22sEGSLJ4vtUxDgU0O2Tt/7vfAXgSsE7lROkLBn7Z7FvsQsxmhGIoEM8GKarqbTooUSu81AmwpiKoSaWu4INmOmCtmxT6EDDpHVNCSlFPE04UcU3V+ESQN+VUHjtgbNkS/mbKDFCj7ZsZURLN3sVAg5nBCpuEYiLorlWgokh5Y8zYORO2WCJuNNo2MsSEFPLJ27wtwGESNavUsFoqAIeMnvTwlqJOmYmTIPWMmImb8Q+HRaFl5+Boq/lncKhulgg3SaV0gG9KcVLXT7NRtkDRoqZRWi512Euu8rEJOeUVAt0jYEu61AsfYvdB1LtTUqjmLD0OWJaRnfhsCUcPWsnJFVOYc69TOAcsTMoGKvCLQHABRT+dSg69bayemOQVRn4GjQNLHab32VxgZPPdrYFcqUb1CFhkD5qLdKSXq53yIcB0bG1KoohWfId2cT32vs2Rp8dkv4DTwdq4T9cpXNFoZ6BNwcD6I6iWbJQWeL4uIvCSsK263zpLlRub3gevdjlHqLFmVvSo+8362EAFdXSUrK8OB89nMX/FZQ5bcii9hvgFFIvx9IVOFurUioX4APAd+dHuyvwIMAJx0V0C7qw7DAAAAAElFTkSuQmCC"
              alt
            />
            <div class="flow-item">
              <img src="https://h5.7881.com/static/img/flow-item3.06d58064.png" alt />
              <span>上架出售</span>
            </div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAsCAYAAAAtv0UIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTI4QTZENzc5QjMyMTFFQjhFMzQ4NTA4M0M3NTFGRTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTI4QTZENzg5QjMyMTFFQjhFMzQ4NTA4M0M3NTFGRTYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMjhBNkQ3NTlCMzIxMUVCOEUzNDg1MDgzQzc1MUZFNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMjhBNkQ3NjlCMzIxMUVCOEUzNDg1MDgzQzc1MUZFNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmv10xwAAAQwSURBVHja7Fo7aBVBFN277z0i2KmVFkqw9IMgCILWIqKgYKGIWliICCZWVmos1EaxML1/LFSIInZ+EEQIaKFlAgYtAipooU3i9SzZhXG8d+ZOkhfYlx047O7s7JudM/f/lsbGxrIatxZwHHgBfJjND/T395vH5lm92zSwGbgEbOz2ZHUnq2gT5fEysLshy76Gk8Cphiy9UXnk8rinlLKlDVlyY+96K3ADWNOQpUsXOX2rgFvAtoasf6WKBQkrzvuAa8CRhqz/JUvrHwDONmTNEMKKSrJzvh+4B6xY7JIlGXsWPOUm4CGwbrGSNR1QQ0lNVwKPgX2pE7UT9N9iG0LjaBbPxa7/AB1HikhRTxb6rgKrgStmfUcinZcSRuUxLxPU3LtuCeftEi0PVb87xu3rOM91vGfcvo73jD+OShvU5/S74/zx7jtV7/oEOIGEeiqVrJZAmDuJT4h/7i9IW7wP6b523laIaSuEtgQCfcI+AgdA2GTMZrEhyGODapBibEmJg0K/R5EInQQjTsrcFHi+auuBV+Pj49tjZJE3qTRhrM8PDqWFpBhh387EyJPm18jVNqxQ5xEQdigmWRTZwczwshQZxwbC3AVRwpyx99Q0Q+ofBmEXYpJlWXDI02QBdWKjx0zN/yRyKaKCFuIGQdgjoCPFWaS4V2vEnLLwGMkW9ZZUVYreJa2hyG9U1zuANyBsrU8WK1LAAWNPgQnnol6p5LvEsFHSKbAB7twbgHcgbKcfwWtssyB5lKCOmqFOtYesSBInBMba/ZA2LSliMRB2Jg9EvyFDzQaP5e8oB0hkowRRJP+jgDfOEtXf/Y3fwGRbEGMtVom5ec22sEGSLJ4vtUxDgU0O2Tt/7vfAXgSsE7lROkLBn7Z7FvsQsxmhGIoEM8GKarqbTooUSu81AmwpiKoSaWu4INmOmCtmxT6EDDpHVNCSlFPE04UcU3V+ESQN+VUHjtgbNkS/mbKDFCj7ZsZURLN3sVAg5nBCpuEYiLorlWgokh5Y8zYORO2WCJuNNo2MsSEFPLJ27wtwGESNavUsFoqAIeMnvTwlqJOmYmTIPWMmImb8Q+HRaFl5+Boq/lncKhulgg3SaV0gG9KcVLXT7NRtkDRoqZRWi512Euu8rEJOeUVAt0jYEu61AsfYvdB1LtTUqjmLD0OWJaRnfhsCUcPWsnJFVOYc69TOAcsTMoGKvCLQHABRT+dSg69bayemOQVRn4GjQNLHab32VxgZPPdrYFcqUb1CFhkD5qLdKSXq53yIcB0bG1KoohWfId2cT32vs2Rp8dkv4DTwdq4T9cpXNFoZ6BNwcD6I6iWbJQWeL4uIvCSsK263zpLlRub3gevdjlHqLFmVvSo+8362EAFdXSUrK8OB89nMX/FZQ5bcii9hvgFFIvx9IVOFurUioX4APAd+dHuyvwIMAJx0V0C7qw7DAAAAAElFTkSuQmCC"
              alt
            />
            <div class="flow-item">
              <img src="https://h5.7881.com/static/img/flow-item4.17987c75.png" alt />
              <span>资金到账</span>
            </div>
          </div>
        </div>
      </div>
      <div class="body-flow-container">
        <div id="f1">
          <div class="top">
            <img src="https://h5.7881.com/static/img/advantage-title.c1f096df.png" alt />
          </div>
          <div class="advantage-item-panel">
            <div class="advantage-item">
              <div class="ji">
                <img src="https://h5.7881.com/static/img/advantage-item1.b1e1de6b.png" alt />

                <div>
                  <span>估价</span>
                  <span>更权威</span>
                  <p>
                    专业系统分析数据
                    分析数据
                  </p>
                </div>
              </div>

              <div class="ji">
                <img src="https://h5.7881.com/static/img/advantage-item2.9518bd2f.png" alt />

                <div>
                  <span>出价</span>
                  <span>更精确</span>
                  <p>
                    没有中间商赚差价
                    卖号更划算
                  </p>
                </div>
              </div>
              <div class="ji">
                <img src="https://h5.7881.com/static/img/advantage-item3.444007ce.png" alt />

                <div>
                  <span>交易</span>
                  <span>更安全</span>
                  <p>
                    官方APP换绑交易
                    安全有保障
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="body-finish-evaluation-container">
      <div>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAlCAYAAAAEGWqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjYyQjAwRjc5QjNFMTFFQjlCOEFDMDFCNzM3QzU4RTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjYyQjAwRjg5QjNFMTFFQjlCOEFDMDFCNzM3QzU4RTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NjJCMDBGNTlCM0UxMUVCOUI4QUMwMUI3MzdDNThFMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2NjJCMDBGNjlCM0UxMUVCOUI4QUMwMUI3MzdDNThFMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkSWdo4AAARPSURBVHja7FlbiE1RGN5rOWdmMjPGYHKZybXIJXnwQFGIvBBJyhMePXhQJB6INCXl9i4ND5TruD2IksitPIhcamQwbpPLMMOYGbb/r2+x/NY61jpzHoz89bVP++z939b6//WttVV6Z0xCoghVQCkhJbwlNBK6kngZTphPGEvIEh4RjhEe5KGrjLCWsJhQQ3hGOEDYQehQFAA7P5TQB8aKcM0QvhBuEjojDE4irCAUQ5fRpwm7CZcjdPUlnCWMJ/QSuECYp/FQb4yCQvZTK/oxEQZ59JbAWSNGFxtdhUSFygbLvvHP6JxDWK2hUAljifVSjXAol4xH5hNLpxIBTgvUlcW0sRORCp3LNB5MHFGal3phGoRIf8c9mZTBgbr6YQYo4Z8toziAr8JI6nAgtAbacugx0hKoq8Vj1w6iWQujLmlGkCFyzzHMdjB8vRaoq51wUehLRWLqOYA3aJUuw11wKlSaYTQR+ozOo2iDobKZ8NEzLVnPFjOFHhNaRXQf0UJbI/v2GcIJtGAjnwn7CXWRuh5yqyTcEqNwHs3glcJCZld+CeZee9I9yaCDKWSrs5v6hqEB8OL64kdBiAB6nOikh8s/F4CyeEshpAwohHBtDpSLasbiKYPBRosRAC8kDXkWMxO6hSCJbPA14TDhah66hhBqwW5L0dEOEdYT3nMRa9DfMouFZgFusTcig5gOQpcVbJSv+wgnI3RxUs8hEZKN3mFb7HwlhidxkLAScPpQqUCmfFxoOWFAhL6NhGqHb6xzImEdB1DuedkYHhRRExOsaemiEtkINlqERSzNwYeWastgrkIPZaPlDqclw+0fqKsS9ajEKmxLtRZbxtTDRjsCjX7wvG+uCtwrRN6Bjsj3bWnSDrKkRNZ42f4WaPSulRBX5jgRVwJ18bOnhV8yOQc1Im331ABn4H5E0bWAzPmKuA6MNVS2MmHz/HebsE0ju404hTDGvqJ3X0ffjZFLhL2El9a954TtzN8jdTURZgt22wb9M3jKSjJnVuKuiGnzp5U4yYOS+1biStRQh1yJ8ynYEGktoK52m0b/Z6N/i2QcZzHFqIFC7MiqUVdNBdqRMRt9ak+ljOV4DYrEEC/uPg88m+pcwg7PAg2osJpCPZBG6uPDsl2EqSBxGnvilYQn3IX45ggcL2YFI1VgozHFyI7PTX49ZzXXU2CkoTIabLQfHM/gqjEKkzW4SZGHSvAL4yIM8n5iZo7/F2GkQ2UT+FUqVmJz5LlRJz+P01PP6VcVhi5EQqj3lIi+P8OzopvfC7TlnDz9te9lA42WOgiXa88QurfIevSZe1U6R3cwD3VGLG5vHCOoRDJeBOp6K2rPleAGDQqscmxqmiLZ6GfPcPP1UxL+gYMTd0S8L48/6ziA98nvB7ymYFqTuM9Cbdi8uwJmgrgHCQuVWg8bNseLO5XjG1kZHOjON7KRaKdj0cn4G9nxSGpu7/LWJJ5vZN8FGADrDRnOem7hNwAAAABJRU5ErkJggg=="
          alt
        />
        <p>
          目前已有
          <span>1227078</span>
          号主完成估价
        </p>

        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAlCAYAAAAEGWqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzlGQkM5Qzc5QjNFMTFFQjk3OTE4NEU0MjRDNzZDNEIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzlGQkM5Qzg5QjNFMTFFQjk3OTE4NEU0MjRDNzZDNEIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3OUZCQzlDNTlCM0UxMUVCOTc5MTg0RTQyNEM3NkM0QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3OUZCQzlDNjlCM0UxMUVCOTc5MTg0RTQyNEM3NkM0QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnM6aV8AAARkSURBVHja7Fndi01RFD/nzL13MIwZk698lanxkbwR8TBiPMhHiHhQ5g/QyIt4IFISpbx4knhRhiLmQYRIEUmiQTEfGYNp5jKMj3vuvcda43e02u1z7t53bmlk1a9z7rn7rLXX2nuv/Vv7uMGzWQ5JirCLsI0wldBFaCYcJXx17KWOsJEwk+ATWglXCW1F6EoQZhCqCR5hgNADBC45kILy5YScgueEVYRPFgaXEpoIeXQ+A/wknCY8sdCVJCwglBOyQh9f+wmd7NFOQgN7g5dcgIWHZ4+FwbGEHYQy/A7Ef2xrM2GUhT62P1roCkT/WE8VK90uOi4bhrIJkTCRJYQK8dtVrhzJeYa6PExnV3kuA13JjWqVBq5yzxEYZ2h0coQxKTWGulIYyUDpj+xf0sNi0HU+FJ57nw2NRrWTnRgw1OVrAhAo9zl24LLyMFCm0y3CD0Oj94WRQBOYABnJRHJKcHUywA4cJLyNGO4vhAMWi471XNQMd6j7tkGnpLRiBugCwc972YEPSH3Xleg/JqwmvLLM22cIZwnfxTNOoZcILZa6eA96iEDKWcLP23mUXGxkchFOh1PtztAkiSwSYGSyQ9Q3Ajp/YH38HhLFgWEnnjPM5Z9zgDePiZhvpZDRggqUoq9Jda9K4FpFOEzYQhiJzeYKYS/hXRHGFoOCTAD56kQWelLk4q0Fz8ojo3Eq7g6zUCXd3AVHUdkoG16JxqayltAoWGNG3J+HLZvOLwSl8IGQlQ6mUh6W3YT5CkkKZQphn4XB8YIc6rjQGkTSVObACVfTN35ezQ5sjeFBATazlAUbTcZQiYQlG50UQwpZxniIstpp6XE5qiETqYlgjrIDYyzYaKEsmfBQPqp0WhIyXjRpQ6O9mvfV4PQb6spEvC+fZdmBczEj4KDczBgavSfaBpq5m0WZaiJ5kTxcTS0wSDbZgSOEpxFK3hMOWSy6HpC5qEXcYlFbsLzADNCtAeZEaQ9DWk84JYqNkD02aKZYIbmM04x3SiBY/x1LXcxoHxA+Iq2HQekjdPAoqWQuhYWYtihiCu3ETpFHM7qslFArtYRm4XQ7pZOvJdSV163F/2z0b0tCcywyDRVZRwkqsimYr10lqsgSSDC+6gCXkScJKzDXcjhhaLLI23IjXAeEi+4z9pObMbQgSnjnrsNJXEgK0yhTfc5CzP8fIfp5IItrH9ioTWHfCNLmK4yUr9fgiE0WWwinJRNlfCO0eWCbUxXeEtIB9n6/hUHWsyHm/2VgrKYyV5nmkkoMpnwPQ6079Qql3qJCW2RIkU2kTHHW1ThS4YlGbsR8Tlpw+LEG66PCIgnoGK18VsYOvI5pEG5GfYZGu5X3XU0Eey3YqB8TXBbfE+RLd7zO1wsybRmw0W8RdDoAt7Fho10xWYv7288OHCfciGj4AsW+qXC6PCGIl9qhZsf8dJrlJWZAoBkF1vPJLfCN7JhyLmkqswnrnd/fyDj1hd/I3hS52YbfyMrg0J9vZL8EGAACsk6q2pgF2gAAAABJRU5ErkJggg=="
          alt
        />
      </div>
    </div>
    <div class="finish-evaluation-list-border">
      <div class="finish-evaluation-list">
        <div class="list-container">
          <roll />
        </div>
      </div>
    </div>
    <div class="body-look-else-buttton">看看其他账号</div>
    <div class="footer">
      <span>7881不回收账号,我们只是账号的“搬运工”</span>
      <p>- 开心游戏 放心交易 -</p>
    </div>
  </div>
</template>

<script>
import { Getdata } from "../api/Getdata.js";
import roll from "../components/roll.vue";
export default {
  data() {
    return {
      key: null,
      arr: ["wz", "hp", "cf", "ys", "cf-pc"],
      config: {
          waitTime:10000,
        data:[
        ],
        index: true,
        columnWidth: [50],
        align: ["center"]
      }
    };
  },
  created() {
    Getdata.get("/goods-service-api/api/untoken/est/support-games").then(
      res => {
        this.key = res.data.body;
      }
    );
    Getdata.get("/goods-service-api/api/untoken/est/case-record").then(res => {
      this.config.data = res.data.body.recordInfo;
    });
  },
  components: {
    roll,
  },
  methods: {
    to(String) {
      if (String == "index") {
        this.$router.push("/home");
      } else if (String == "login") {
        this.$router.push("/GoLogin");
      }
    }
  }
};
</script>
<style scoped src="../assets/css/estimate.css">
</style>
<style lang="less" scoped>
</style>