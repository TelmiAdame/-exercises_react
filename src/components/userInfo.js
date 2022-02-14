import React from "react";

export default function userInfo() {
  return (
    <>
      <div className="user-info">
        <img src="https://avatars.githubusercontent.com/u/44340715?v=4" />
        <h1 className="username">
          <a href="https://github.com/TelmiAdame">Telmi Adame</a>
        </h1>

        <div className="repos-info">
          <ul>
            <li>- Repositórios: 11</li>
            <li>- Seguidores: 0</li>
            <li>- Seguindo: 1</li>
          </ul>
        </div>
      </div>
    </>
  );
}