from http.server import HTTPServer, BaseHTTPRequestHandler
import urllib.parse as urlparse


class serverHandler(BaseHTTPRequestHandler):

    def do_GET(self):
        # http://127.0.0.1:8080/?data=one%20two
        data = self.__get_Parameter('data')
        print(f'data : {data}')
        body = f"""
                <!DOCTYPE html>
                <html>
                <head>
                <title>bruteforce</title>
                </head>
                <body>
                    <form method='post'>
                        <input type='text' name='id' value=''><br>
                        <input type='password' name='pw' value=''><br>
                        <input type='submit'>
                    </form>
                    <p>params : {data}</p>
                    <p>params : {data.decode('utf-8')}</p>
                </body>
                </html>
                """
        self.__set_Header(200)
        self.__set_Body(body)
        print('--- get 요청 전달 완료 ---')

    def do_POST(self):
        self.__set_Header(200)
        self.__set_Body(self.__get_Post_Parameter('id'))
        print('--- post 요청 전달 완료 ---')

    def __get_Parameter(self, key):
        if hasattr(self, "_serverHandler__param") == False:
            if "?" in self.path:
                self.__param = dict(urlparse.parse_qsl(
                    self.path.split("?")[1], True))
            else:
                self.__param = {}
        print(f'get params = {self.__param}')
        if key in self.__param:
            return self.__param
        return None

    def __get_Post_Parameter(self, key):
        if hasattr(self, "_serverHandler__post_param") == False:
            data = self.rfile.read(int(self.headers['Content-Length']))
            if data is not None:
                self.__post_param = dict(urlparse.parse_qs(data.decode()))
            else:
                self.__post_param = {}
        print(f'post params = {self.__post_param}')
        if key in self.__post_param:
            if self.__post_param['id'] == ['hojun'] and self.__post_param['pw'] == ['1234']:
                return 'success login'
        return f"""
                <!DOCTYPE html>
                <html>
                <head>
                <title>bruteforce</title>
                </head>
                <body>
                    <form method='post'>
                        <input type='text' name='id' value=''><br>
                        <input type='password' name='pw' value=''><br>
                        <input type='submit'>
                        <p style='color:red'>check your id or password</p>
                        <p>params : {data}</p>
                        <p>params : {data.decode('utf-8')}</p>
                    </form>
                </body>
                </html>
                """

    # http 프로토콜의 header 내용을 넣는다.
    def __set_Header(self, code):
        # 응답 코드를 파라미터로 받아 응답한다.
        self.send_response(code)
        self.send_header('Content-type', 'text/html')
        self.end_headers()

    # http 프로토콜의 body내용을 넣는다.
    def __set_Body(self, data):
        self.wfile.write(data.encode())


# http server 생성
PORT = 8080
server = HTTPServer(('', PORT), serverHandler)
# 서버 중지(Ctrl + Break)가 나올때까지 message 루프를 돌린다.
print(f'서버가 {PORT}에서 서비스되고 있습니다.')
server.serve_forever()

# 참조 - https://nowonbun.tistory.com/675
# 참조 - https://docs.python.org/3.3/library/http.server.html
# 참조 - https://docs.python.org/3/library/http.server.html
# 참조 - https://docs.python.org/3/library/io.html#io.BufferedIOBase
# 참조 - https://wiki.python.org/moin/BaseHttpServer
# 참조 - https://gist.github.com/pavgup/11220737
