import { observable } from 'mobx';
import { zhTW } from 'localization/zhTW';
import { enUS } from 'localization/enUS';

class TranslateStore {
  @observable language = 'zhTW';

  @observable translateObj = (this.language === 'zhTW' ? zhTW : enUS);

  setLanguage = (lan) => {
    this.language = lan;
    this.translateObj = (lan === 'zhTW' ? zhTW : enUS);
  }
}

const translateStore = new TranslateStore();

export default translateStore;
