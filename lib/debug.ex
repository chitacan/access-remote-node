defmodule Debug do
  def send_module(node) do
    {module, binary, file} = :code.get_object_code(Hello)
    :rpc.call(node, :code, :load_binary, [module, file, binary])
  end

  def cleanup(node) do
    :rpc.call(node, :code, :purge, [Hello])
    :rpc.call(node, :code, :delete, [Hello])
  end
end
