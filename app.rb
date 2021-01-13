require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/cookies'
enable :sessions
require 'pg'


client = PG::connect(
  :host => "localhost",
  :user => ENV.fetch("USER", "kd"), :password => 'kchkskchks1',
  :dbname => "myapp")



post '/done' do
  name = params[:name]
  email = params[:email]
  password = params[:password]
  date = params[:date]
  place = params[:place]
  gender =  params[:gender]
  height = params[:height]
  weight = params[:weight]
  licence = params[:licence]
  log = params[:log]
  if name  == "" || password  == "" || date  == "" || height  == "" || weight  == "" || log  == ""  
    @fail_reservation="入力していない項目があります。"
    return erb :reservation
  else
    client.exec_params("INSERT INTO reservations (name, email, password, gender, height, weight, licence, log, date, place) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)", [name, email, password, gender, height, weight, licence, log, date, place]).to_a
    return erb :done
  end
end

get '/done' do
  return erb :done
end


post '/signup' do
  name = params[:name]
  email = params[:email]
  password = params[:password]
  gender =  params[:gender]
  height = params[:height]
  weight = params[:weight]
  licence = params[:licence]
  log = params[:log]

  if name  == "" || password  == "" || height  == "" || weight  == "" || log  == "" 
    @fail_signup="入力していない項目があります。"
    return erb :signup
  else
    client.exec_params("INSERT INTO customers 
      (name, email, password, gender, height, weight, licence, log)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)", 
      [name, email, password, gender, height, weight, licence, log]).to_a
    return erb :signin
  end
end

get '/signup' do
  return erb :signup
end


post "/signin" do
  email = params[:email]
  password = params[:password]

  customer = client.exec_params("SELECT * FROM customers WHERE email = '#{email}' AND password = '#{password}'").to_a.first

  if customer.nil?
    @fail_signin="メールアドレルまたはパスワードが違います"
    return erb :signin
  else
    session[:customer] = customer
    return redirect '/mypage'
  end
end

get '/signin' do
  return erb :signin
end

get "/mypage" do
  @name = session[:customer]['name']
  return erb :mypage
end


post "/reservation" do
  name = params[:name]
  customer = client.exec_params("SELECT * FROM customers WHERE name = '#{name}' ").to_a.first
  if customer.nil?
    return erb :reservation
  else
    session[:customer] = customer
    @name = session[:customer]['name']
    @email = session[:customer]['email']
    @password = session[:customer]['password']
    @gender = session[:customer]['gender']
    @height = session[:customer]['height']
    @weight = session[:customer]['weight']
    @licence = session[:customer]['licence']
    @log = session[:customer]['log']
    @causion="日付とポイントを入力してください"
    return erb :reservation
  end
end

get '/reservation' do
  return erb :reservation
end


post "/pastlog" do
  name = params[:name]
  customer = client.exec_params("SELECT * FROM customers WHERE name = '#{name}' ").to_a.first
  session[:customer] = customer
  @name = session[:customer]['name']

  return erb :pastlog
end


post '/logs' do
  name = params[:name]
  customer = client.exec_params("SELECT * FROM customers WHERE name = '#{name}' ").to_a.first
  session[:customer] = customer
  @name = session[:customer]['name']
  return erb :logs
end

get '/logs' do
  return erb :logs
end

post '/newlogs' do
  date = params[:date]
  place = params[:place]
  time =  params[:time]
  maxdepth = params[:maxdepth]
  avedepth = params[:avedepth]
  name = params[:name]

  customer = client.exec_params("SELECT * FROM customers WHERE name = '#{name}' ").to_a.first
  session[:customer] = customer
  @name = session[:customer]['name']

  if date  == "" || place  == "" || time  == "" || maxdepth  == "" || avedepth  == "" 
    @fail_logs="入力していない項目があります。"
    return erb :logs
  else
    client.exec_params("INSERT INTO logs (name,date,place,time,maxdepth,avedepth) VALUES ($1, $2, $3, $4, $5, $6)", [name,date,place,time,maxdepth,avedepth]).to_a
    log = client.exec_params("SELECT * FROM logs WHERE name = '#{name}' AND date = '#{date}' AND place = '#{place}' AND time = '#{time}' AND maxdepth = '#{maxdepth}' AND avedepth = '#{avedepth}'").to_a.first
    session[:log] = log
    @name = session[:log]['name']
    @date = session[:log]['date']
    @place = session[:log]['place']
    @time = session[:log]['time']
    @maxdepth = session[:log]['maxdepth']
    @avedepth = session[:log]['avedepth']
    return erb :pastlog
  end
end