import {observable,action} from 'mobx'


class HomeStore{
    @observable num=0
    @observable list=[]
    @action async addNum(){
        this.num++
        console.log(222)

    }
}
export default HomeStore