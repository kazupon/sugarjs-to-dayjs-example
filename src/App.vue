<template>
  <h2>Sugar.js</h2>
  <p>昨日: {{ yesterday1 }}</p>
  <h2>Day.js</h2>
  <p>昨日: {{ yesterday2 }}</p>
</template>

<script setup lang="ts">
import 'sugar-date/locales/ja'
import Sugar from 'sugar-date'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import 'dayjs/locale/ja'
import CustomFormatter from './formatter'

Sugar.Date.setLocale('ja')
dayjs.extend(utc)
dayjs.extend(CustomFormatter)
dayjs.locale('ja') 

const yesterday1 = Sugar.Date.create('昨日')
// const yesterday2 = dayjs()
const yesterday2 = dayjs('昨日')

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
