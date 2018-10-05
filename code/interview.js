// 描述：

// 将一天24小时按每半小划分成48段，我们用一个位图表示选中的时间区间，例如`110000000000000000000000000000000000000000000000`，
// 表示第一个半小时和第二个半小时被选中了，其余时间段都没有被选中，也就是对应00:00~01:00这个时间区间。一个位图中可能有多个不连续的
// 时间区间被选中，例如`110010000000000000000000000000000000000000000000`，表示00:00-1:00和02:00-02:30这两个时间区间被选中了。

// 要求：写一个函数timeBitmapToRanges，将上述规则描述的时间位图转换成一个选中时间区间的数组。
// 示例输入：`"110010000000000000000000000000000000000000000000"`
// 示例输出：`["00:00~01:00", "02:00~02:30"]`

function timeBitmapToRanges(bitmap) {
    let array = bitmap.split('');
    let tmpAll = [];
    let tmp = {};
    for(let i=0; i<48; i++){
        if(array[i] == 1 && tmp.start == null){
            tmp.start = i;
            tmp.size = 1;
        }else if(array[i] == 1){
            tmp.size = tmp.size + 1;
        }
        else if(tmp.start != null){
            tmpAll.push(tmp)
            tmp = {};
        }
    }
    console.log(tmpAll)
    let result = [];
    tmpAll.forEach(x => {
        let startHour = Math.floor(x.start * 0.5);
        let endHour = Math.floor(startHour + x.size * 0.5);
        let startMin = x.start%2 == 0 ? '00' : '30';
        let endMin;
        if(startMin == '00'){
            endMin =  x.size%2 == 0 ? '00' : '30';
        }else{
            endMin =  x.size%2 == 0 ? '30' : '00';
        }
        startHour = startHour < 10 ? '0' + startHour : startHour;
        endHour = endHour < 10 ? '0' + endHour : endHour;
        let time = startHour + ':' + startMin + '~' + endHour + ':' + endMin;
        result.push(time);
    });
    console.log(result);
}

timeBitmapToRanges('110011100000000000000000110000000000000001101101')
