var testData = {
  nodes: [
    {
      id: '1', label: '博士', type: '男', properties: {age: 50},
      image: 'https://vue-1308757732.cos.ap-shanghai.myqcloud.com/csvData/doctor.png'
    },
    {
      id: '2', label: '论文', type: '男',
      image: 'https://vue-1308757732.cos.ap-shanghai.myqcloud.com/csvData/paper.png'
    },
    {
      id: '3', label: '搜索', type: '男',
      image: 'https://vue-1308757732.cos.ap-shanghai.myqcloud.com/csvData/search.png'
    }
  ],
  links: [{source: '1', target: '2', label: '二', properties: {other: 'other prop'}},
    {source: '1', target: '3', label: '三'}]
};

export default {
  testData: testData
}
