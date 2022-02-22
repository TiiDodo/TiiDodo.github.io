import geoip2.webservice

address=input(str("Entrez une adresse ip : "))

with geoip2.webservice.Client(658875, 'MgWqnoWlZ4kd5qTO', host='geolite.info') as client:
    response = client.city(address)
    latitude = response.location.latitude
    longitude = response.location.longitude

    
file = open("main.js", mode="r")
data = file.readlines()
file.close()

def overwrite(file, content):
    for i in range(len(content)):
        file.write(content[i])
    
data[2] = '   lat : '+str(latitude)+','
data[3] = '\n   lng : '+str(longitude)+'\n'

file=open('main.js', mode='w')
overwrite(file, data)
file.close()
