import HttpException from "./model/http-exception.model"

export const getRequestBody = (req: any): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      let body = ''
      req.on('data', (chunk: any) => {
        body += chunk.toString()
      })
  
      req.on('end', async () => {
        resolve(body)
      })
  
    } catch (err) {
      reject(new HttpException(500, "Error parsing request body"))
    }

  })
}