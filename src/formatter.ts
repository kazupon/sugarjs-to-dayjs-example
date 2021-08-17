export default (option: any, dayjsClass, dayjsFactory) => {
  const proto = dayjsClass.prototype
  const oldParse = proto.parse
  proto.parse = function (cfg: any) {
    const { date, utc, args } = cfg
    this.$u = utc
    const format = args[0]
    if (typeof date === 'string' && typeof format === 'string') {
      const locale = this.$locale()
      this.$d = parse(date, format, locale)
      this.init()
    } else {
      oldParse.call(this, cfg)
    }
  }
}

function parse(date: string, format: string, locale: Record<string, any>): Date {
  const { name: lang } = locale
  const processor = processTable[date]
  return processor(format, lang)
}

const processTable: Record<string, Function> = {
  '昨日': processYesterday,
  'yesterday': processYesterday
}

function processYesterday(format: string, locale: string): Date {
  const now = new Date()
  let ms = 0
  // TODO: should be calculate UTC or timezone (locale)
  if (locale === 'ja') {
  }
  return new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate() - 1, now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds() + ms))
}
