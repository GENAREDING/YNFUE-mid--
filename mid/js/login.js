new Vue({
  el: '#app',
  data: {
    username: '',
    password: ''
  },
  methods: {
    login() {
      if (this.username === 'jad' && this.password === 'jad') {
        window.location.href = 'main.html'; // 导航到main.html
      } else {
        alert('登录失败，请检查用户名和密码。');
      }
    }
  }
});
