import { createStore } from 'vuex'

export default createStore({
  state: {
    holds: [
      { code: '005930', name: '삼성전자'          },
      { code: '005935', name: '삼성전자우'        },
      { code: '373220', name: 'LG에너지솔루션'    },
      { code: '207940', name: '삼성바이오로직스'   },
      { code: '000660', name: 'SK하이닉스'        },
      { code: '006400', name: '삼성SDI'           },
      { code: '051910', name: 'LG화학'            },
      { code: '005380', name: '현대차'            },
      { code: '035420', name: 'NAVER'             },
      { code: '000270', name: '기아'              },
      { code: '068270', name: '셀트리온'          },
      { code: '035720', name: '카카오'            },
      { code: '005490', name: 'POSCO홀딩스'       },
      { code: '028260', name: '삼성물산'          },
      { code: '105560', name: 'KB금융'            },
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
