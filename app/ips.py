import requests
import socket


def get_ip_data(ip):
    link = f'http://ip-api.com/json/{ip}'
    result = requests.get(link)
    return result.json()


def find_ips_from_json(ips):
    data = []
    for x in ips:
        data.append(get_ip_data(x['ip']))
    return data


def make_loc(ip):
    loc = get_ip_data(ip)
    x = loc['lat']
    y = loc['lon']
    return [x, y]


def get_ip_by_name(name):
    ip = socket.gethostbyname(name)
    data = get_ip_data(ip)
    result = [data['lat'], data['lon'], data['query']]
    return result
