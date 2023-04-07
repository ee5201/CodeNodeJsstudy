import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// The GraphQL schema
const typeDefs = `#graphql

  input CreateBoardInput {
      writer:String
      title:String
      contents:String
    }


  type BoardReturn {
    number:Int
    writer:String
    title:String
    contents:String
  }

  type Query {
    # fetchBoards: BoardReturn => 객체 1개를 의미 
    fetchBoards: [BoardReturn]
  }
  type Mutation {
    createBoard(writer: String, title: String , contents: String): String,
    createBoard2(createBoardInput: CreateBoardInput): String

  }
`;

// A map of functions which return data for the schema.

// resolvers : graphql 에서 부르는 api
const resolvers = {
  Query: {
    fetchBoards: () =>{
    //1. 데이터를 등록하는 로직  => DB에 접속해서 데이터 꺼내오기
    const result  = [
      {number:1 , writer:"철수",title:"제목입니다.",contents:"내용이에요",Phone:"01012345678"},
      {number:2 , writer:"훈수",title:"훈제목입니다.",contents:"훈내용이에요",Phone:"01012345278"},
      {number:3 , writer:"김수",title:"김제목입니다.",contents:"김내용이에요",Phone:"01012345378"}
  
    ]
        return result
    }
  },

  Mutation:{

    createBoard: (_,arg) =>{
              //1. 데이터를 등록하는 로직  => DB에 접속해서 데이터 저장하기
              console.log(arg)

              //2. 결과 알려주기

      return "등록완료하였습니다."
    },
    createBoard2: (_,arg) =>{
      //1. 데이터를 등록하는 로직  => DB에 접속해서 데이터 저장하기
      console.log(args)

      //2. 결과 알려주기

return "등록완료하였습니다."
}

  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  //shrthand property
});

const { url } = await startStandaloneServer(server,{
  listen:{port:3000}
});
console.log(`🚀 Server ready at ${url} on port ${3000}`);