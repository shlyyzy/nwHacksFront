import spotipy
import spotipy.util as util
from spotipy.oauth2 import SpotifyClientCredentials
from flask import Flask
from flask import jsonify, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


thisdict = {
    "name": "Ford",
    "rating": 123,
    "year": 1964
}


@app.route('/data')
def data():
    # here we want to get the value of user (i.e. ?user=some-value)
    time = request.args.get('time')   
    

@app.route('/')
def hello_world():
    return 'this is /'


@app.route('/<type>/<mins>', methods=['GET', 'POST'])
def test(type,mins):
    print(type)
    print(mins)
    
    id = updateSpotify(type, mins)
    
    return id


def updateSpotify(selected_playlist, mins):
    username = "ozujzpuiqgx8oo3k0kzj4cnk1"
    token = util.prompt_for_user_token(username, scope='playlist-modify-private,playlist-modify-public', client_id='8ec10118123745c98796a0da389e1b35', client_secret='832c43bccfe44e6d90cd3ac66cc7e28b', redirect_uri='https://localhost:8080')

    track_list = list()
    track_duration = list() # in ms
    new_tracks = list()
    user_playlistDict = {}
    track_id = list()

    productive = ['37i9dQZF1DX1OY2Lp0bIPp', '37i9dQZF1DWUvQoIOFMFUT']
    workout = ['37i9dQZF1DX76Wlfdnj7AP', '37i9dQZF1DXdxcBWuJkbcy']
    sleep = ['37i9dQZF1DWUXaCLIrt6jX', '37i9dQZF1DX3Ogo9pFvBkY']
    nostalgic = ['37i9dQZF1DWWwaxRea1LWS', '37i9dQZF1DXbTxeAdrVG2l']

    if selected_playlist == 'productive':
        sel_playlist = productive
    elif selected_playlist == 'workout':
        sel_playlist = workout
    elif selected_playlist == 'sleep':
        sel_playlist = sleep
    else:
        sel_playlist = nostalgic

    max_time = int(mins) * 1000 * 60
    sum = 0

    if token:
        sp = spotipy.Spotify(auth=token)
        
        # track to get stuff from
        track1 = sp.user_playlist_tracks("spotify", playlist_id=sel_playlist[0])
        print(track1)
        print('max time:')
        print(max_time)
        
        # Get my playlists.  
        my_playlists = sp.user_playlists(username)
        for i, my_playlists in enumerate(my_playlists['items']):
            user_playlistDict[my_playlists['name']] = my_playlists['id']
        # If selected playlist doesnt exist, create it and add it to dict
        if user_playlistDict.get(selected_playlist) == None:
            print(user_playlistDict)
            ret = sp.user_playlist_create(username, selected_playlist, public=True)
            if ret.get('id') is not None:
                user_playlistDict[ret['name']] = ret['id']
                
            my_playlists = sp.user_playlists(username)
        
        playlist_id = user_playlistDict[selected_playlist]
        
        # save all tracks from the appropriate playlist
        for item in track1['items']:
            track_id.append(item['track']['uri'])
            track_duration.append(item['track']['duration_ms'])
           
        # select tracks that fill up the max time set from user
        for i in range(1,len(track_id)):
            if sum + track_duration[i] < max_time:
                sum = sum + track_duration[i]
                new_tracks.append(track_id[i])
                x = sp.user_playlist_replace_tracks(username, playlist_id, new_tracks)
                print(x)
                
        return playlist_id

    
if __name__ == '__main__':
    

        
    app.run(host='0.0.0.0',port=8080)