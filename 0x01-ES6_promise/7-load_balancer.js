export default function loadBalancer(chinaDownload, USDownload) {
  return new Promise((resolve) => {
    chinaDownload.then((china) => {
      USDownload.then((US) => {
        resolve([china, US]);
      });
    });
  });
}
