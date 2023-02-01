from app.config import app
from flask import request, render_template, flash, redirect, jsonify
from app.ips import make_loc, get_ip_data, find_ips_from_json, get_ip_by_name


# # # # # # # # # # # # # # # # Site # # # # # # # # # # # # # # # #

@app.route('/ip', methods=['GET'])
def show_map():
    loc = make_loc('')
    lat = loc[0]
    lon = loc[1]
    return render_template('app.html', loc=[lat, lon])


@app.route('/ip/get=<string:ip>', methods=['GET'])
def get_loc(ip):
    data = make_loc(ip)
    return data


@app.route('/ip/table=<string:ip>', methods=['GET'])
def get_table(ip):
    data = get_ip_data(ip)
    return render_template('table.html', data=data)


@app.route('/ip/name=<string:name>', methods=['GET'])
def get_ip_info_from_name(name):
    data = get_ip_by_name(name)
    return data


# # # # # # # # # # # # # # # # Api # # # # # # # # # # # # # # # #

@app.route('/api/ip=<string:ip>', methods=['GET'])
def get_ip_info(ip):
    data = get_ip_data(ip)
    return jsonify(data)


@app.route('/api/ips/json', methods=['GET'])
def get_ips_info_from_json():
    ips = request.get_json()
    data = find_ips_from_json(ips)
    return jsonify(data)

# # # # # # # # # # # # # # # # Gerais # # # # # # # # # # # # # # # #

@app.errorhandler(404)
@app.errorhandler(405)
def not_found(e):
    flash('Pagina não encontrada! tente novamente mais tarde')
    if request.referrer:
        return redirect(request.referrer)
    else:
        return redirect('/ip')
