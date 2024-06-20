import { createClient } from "@supabase/supabase-js";
export const supabase = createClient('https://sfoojamrmgvnpqymiild.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmb29qYW1ybWd2bnBxeW1paWxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcyNTY0NzcsImV4cCI6MjAzMjgzMjQ3N30.V2IY1veQVqF6vptS8A5YoSaPRTO1fTVdIPDUwCYk3S8');

document.getElementById("SendComment").addEventListener("click", insert);

async function insert() {
    let email = document.getElementById("inputEmal").value
    let name = document.getElementById("inputUser").value
    let user_ig = document.getElementById("inputIG").value
    let user_x = document.getElementById("inputX").value
    let massage = document.getElementById("inputComment").value
    const { data, error } = await supabase
      .from('user')
      .insert([
        { email, name, user_ig, user_x, massage },
      ])
      .select()
            
      console.log(data, error)
}